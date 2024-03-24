"use client";

import { useCallback, useState, useMemo } from "react";
import { Callback } from "../../util";
import win from "../../util/window";
import useDebounce from "../useDebounce";
import useInterval from "../useInterval";

export type StorageTypeHook = "localStorage" | "sessionStorage";

type StorageDefault<T> = (() => T) | T | undefined;

export type StorageHook<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>,
  Callback
];

export default function useStorage<T>(
  key: string,
  defaultValue: StorageDefault<T>,
  storage: StorageTypeHook
): StorageHook<T> {
  const storageObject: Storage | undefined = useMemo(() => win?.[storage], []);
  const [value, setValue] = useState<T | undefined>();

  const { stop } = useInterval(() => {
    if (typeof window === "undefined" || !storageObject) return;
    stop();
    const jsonValue = storageObject.getItem(key);
    try {
      if (jsonValue !== null) return JSON.parse(jsonValue ?? "{}") as T;
    } catch (e) {
    } finally {
      if (typeof defaultValue === "function") {
        return (defaultValue as () => T)();
      } else {
        return defaultValue;
      }
    }
  }, 20);
  useDebounce(
    () => {
      if (typeof window === "undefined" || !storageObject) return;

      if (value === undefined) {
        storageObject?.removeItem(key);
      } else {
        storageObject?.setItem(key, JSON.stringify(value));
      }
    },
    100,
    [key, value, storageObject]
  );

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove] as const;
}

export function useLocalStorage<T>(
  key: string,
  defaultValue?: StorageDefault<T>
): StorageHook<T> {
  return useStorage<T>(key, defaultValue, "localStorage");
}

export function useSessionStorage<T>(
  key: string,
  defaultValue?: StorageDefault<T>
): StorageHook<T> {
  return useStorage<T>(key, defaultValue, "sessionStorage");
}
