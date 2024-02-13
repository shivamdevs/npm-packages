"use client"

import { useEffect, useRef } from 'react';
import win from '../../util/window';

function useScrollRestore() {
    const scrollPosition = useRef(0);

    useEffect(() => {
        return () => {
            scrollPosition.current = win?.scrollY ?? -1;
        };
    }, []);

    useEffect(() => {
        win?.scrollTo(0, scrollPosition.current);
    }, []);

    function restoreScrollPosition() {
        win?.scrollTo(0, scrollPosition.current);
    };

    return restoreScrollPosition;
};

export default useScrollRestore;
