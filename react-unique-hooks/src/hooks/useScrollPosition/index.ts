import { useState, RefObject } from 'react';
import useEventListener from '../useEventListener';

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
                x: window.scrollX || document.documentElement.scrollLeft,
                y: window.scrollY || document.documentElement.scrollTop
            });
        }
    };

    useEventListener("scroll", handleScroll);

    return scrollPosition;
}

export default useScrollPosition;
