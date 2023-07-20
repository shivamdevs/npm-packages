import { useState, useEffect } from "react";

export type SizeHook = DOMRectReadOnly | {};

export default function useSize(ref: { current: Element }): SizeHook {
    const [size, setSize] = useState<SizeHook>({});

    useEffect(() => {
        if (ref.current == null) return;
        const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return size;
}
