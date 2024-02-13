"use client"

import { useState } from "react";
import useEventListener from "../useEventListener";
import win from "../../util/window";

export type WindowSizeHook = { width: number, height: number };

export default function useWindowSize(): WindowSizeHook {
    const [windowSize, setWindowSize] = useState<WindowSizeHook>({ width: win?.innerWidth ?? 0, height: win?.innerHeight ?? 0 });

    useEventListener("resize", () => {
        setWindowSize({ width: win?.innerWidth ?? 0, height: win?.innerHeight ?? 0 })
    });

    return windowSize;
}
