"use client"

import { useCallback, useState, useEffect, useMemo } from "react";
import { Callback } from "../../util";
import win from "../../util/window";

export type StorageTypeHook = "localStorage" | "sessionStorage";

type StorageDefault<T> = (() => T) | T | undefined;

export type StorageHook<T> = [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>, Callback];

export default function useStorage<T>(key: string, defaultValue: StorageDefault<T>, storage: StorageTypeHook): StorageHook<T> {
    const storageObject: Storage | undefined = useMemo(() => win?.[storage], []);
    const [value, setValue] = useState<T | undefined>(() => {
        const jsonValue = storageObject?.getItem(key);
        try {
            if (jsonValue !== null) return JSON.parse(jsonValue ?? "{}") as T;
        } catch (e) { } finally {
            if (typeof defaultValue === "function") {
                return (defaultValue as () => T)();
            } else {
                return defaultValue;
            }
        }
    });

    useEffect(() => {
        if (value === undefined) {
            storageObject?.removeItem(key);
        } else {
            storageObject?.setItem(key, JSON.stringify(value));
        }
    }, [key, value, storageObject]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
}

export function useLocalStorage<T>(key: string, defaultValue?: StorageDefault<T>): StorageHook<T> {
    return useStorage<T>(key, defaultValue, "localStorage");
}

export function useSessionStorage<T>(key: string, defaultValue?: StorageDefault<T>): StorageHook<T> {
    return useStorage<T>(key, defaultValue, "sessionStorage");
}
