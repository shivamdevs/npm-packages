"use client";

import { useCallback, useEffect, useRef } from "react";
import { Callback } from "../../util";

export type IntervalHook = {
  start: Callback;
  stop: Callback;
  reset: Callback;
};

export default function useInterval(
  callback: Callback,
  delay: number
): IntervalHook {
  const callbackRef = useRef<Callback>(callback);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const start: Callback = useCallback(() => {
    if (!intervalRef.current) {
      intervalRef.current =
        setInterval(() => callbackRef.current(), delay) ?? -1;
    }
  }, [delay]);

  const stop: Callback = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    start();

    return stop;
  }, [delay, start, stop]);

  const reset: Callback = useCallback(() => {
    stop();
    start();
  }, [start, stop]);

  return { start, stop, reset };
}
