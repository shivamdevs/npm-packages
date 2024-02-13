"use client"

import { useCallback, useRef, useState } from "react";
import { Callback } from "../../util";

type GoCallback = (index: number) => void;

export type HistoryOperationHook<T> = {
    history: T[];
    pointer: number;
    back: Callback;
    forward: Callback;
    go: GoCallback;
};

export type HistoryHook<T> = [T, React.Dispatch<React.SetStateAction<T>>, HistoryOperationHook<T>];

export default function useStateWithHistory<T>(defaultValue: T, capacity: number = 10): HistoryHook<T> {
    const [value, setValue] = useState<T>(defaultValue);
    const historyRef = useRef<T[]>([value]);
    const pointerRef = useRef<number>(0);

    const set = useCallback((v: T | ((prevState: T) => T)) => {
        const resolvedValue = typeof v === "function" ? (v as (prevState: T) => T)(value) : v;
        if (historyRef.current[pointerRef.current] !== resolvedValue) {
            if (pointerRef.current < historyRef.current.length - 1) {
                historyRef.current.splice(pointerRef.current + 1);
            }
            historyRef.current.push(resolvedValue);

            while (historyRef.current.length > capacity) {
                historyRef.current.shift();
            }
            pointerRef.current = historyRef.current.length - 1;
        }
        setValue(resolvedValue);
    }, [capacity, value]);

    const back: Callback = useCallback(() => {
        if (pointerRef.current <= 0) return;
        pointerRef.current--;
        setValue(historyRef.current[pointerRef.current]);
    }, []);

    const forward: Callback = useCallback(() => {
        if (pointerRef.current >= historyRef.current.length - 1) return;
        pointerRef.current++;
        setValue(historyRef.current[pointerRef.current]);
    }, []);

    const go: GoCallback = useCallback((index: number) => {
        if (index < 0 || index > historyRef.current.length - 1) return;
        pointerRef.current = index;
        setValue(historyRef.current[pointerRef.current]);
    }, []);

    return [value, set, { history: historyRef.current, pointer: pointerRef.current, back, forward, go }];
}
