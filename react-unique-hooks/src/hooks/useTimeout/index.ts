"use client";

import { useCallback, useEffect, useRef } from "react";
import { Callback } from "../../util";

export type TimeoutHook = {
  reset: Callback;
  clear: Callback;
};

export default function useTimeout(
  callback: Callback,
  delay: number
): TimeoutHook {
  const callbackRef = useRef<Callback>(callback);
  const timeoutRef = useRef<number>(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set: Callback = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear: Callback = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset: Callback = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear } as const;
}
