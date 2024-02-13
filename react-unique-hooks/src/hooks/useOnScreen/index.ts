"use client"

import { useEffect, useState } from "react";

export type OnScreenHook = boolean;

export default function useOnScreen(ref: { current: Element }, rootMargin: string = "0px"): OnScreenHook {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        if (ref.current == null) return;

        const observer: IntersectionObserver = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { rootMargin });
        observer.observe(ref.current);

        return () => {
            if (ref.current == null) return;
            observer.unobserve(ref.current);
        }
    }, [ref.current, rootMargin]);

    return isVisible;
}
