"use client"

import { useState, RefObject } from 'react';
import useEventListener from '../useEventListener';
import win from '../../util/window';

export interface ScrollPositionHook {
    x: number;
    y: number;
}

function useScrollPosition(ref?: RefObject<HTMLElement>): ScrollPositionHook {

    const [scrollPosition, setScrollPosition] = useState<ScrollPositionHook>({ x: 0, y: 0 });

    const handleScroll = () => {
        if (ref && ref.current) {
            setScrollPosition({
                x: ref.current.scrollLeft,
                y: ref.current.scrollTop
            });
        } else {
            setScrollPosition({
                x: win?.scrollX ?? win?.document.documentElement.scrollLeft ?? 0,
                y: win?.scrollY ?? win?.document.documentElement.scrollTop ?? 0
            });
        }
    };

    useEventListener("scroll", handleScroll);

    return scrollPosition;
}

export default useScrollPosition;
