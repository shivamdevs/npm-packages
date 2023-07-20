import { useState } from "react";
import useEventListener from "../useEventListener";

export type WindowSizeHook = { width: number, height: number };

export default function useWindowSize(): WindowSizeHook {
    const [windowSize, setWindowSize] = useState<WindowSizeHook>({ width: window.innerWidth, height: window.innerHeight });

    useEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    });

    return windowSize;
}
