"use client";

import useAsync from "../useAsync";
import { Dependencies, ErrorHook } from "../../util";

export const FetchDefaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export type FetchHook<T, E> = [
  value: T | undefined,
  loading: boolean,
  error: ErrorHook<E>
];

export default function useFetch<T, E>(
  url: string,
  options: RequestInit = {},
  dependencies: Dependencies = []
): FetchHook<T, E> {
  return useAsync(async () => {
    const res = await fetch(url, { ...FetchDefaultOptions, ...options });
    if (res.ok) return res.json();
    const json = await res.json();
    return await Promise.reject(json);
  }, dependencies);
}
