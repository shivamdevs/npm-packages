"use client";

import { useCallback, useEffect, useState } from "react";
import { Dependencies, ErrorHook } from "../../util";

type PromiseCallback<T> = () => Promise<T>;

export type AsyncHook<T, E> = [
  value: T | undefined,
  loading: boolean,
  error: ErrorHook<E>
];

/**
 * Perform any asynchronous function as a hook
 *
 * @param callback: A function that returns any type of promise.
 * @param dependencies: A dependency array, based on which the promise state is re-calculated.
 *
 * @returns An array of value, loading state & error.
 *
 * @example
 * const [data, isLoading, error] = useAsync(() => new Promise((resolve) => {
 *    setTimeout(resolve, 5000);
 * }));
 *
 * @see https://docs.devflikr.com/packages/react-unique-hooks/useAsync
 *
 * @author DevFlikr LLC
 * @date 2024-03-12
 */
export default function useAsync<T, E>(
  callback: PromiseCallback<T>,
  dependencies: Dependencies = []
): AsyncHook<T, E> {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorHook<E>>();
  const [value, setValue] = useState<T | undefined>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch((e: ErrorHook<E>) => setError(e))
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return [value, loading, error] as const;
}
