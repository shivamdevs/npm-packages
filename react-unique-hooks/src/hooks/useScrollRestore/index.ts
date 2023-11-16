import { useEffect, useRef } from 'react';

function useScrollRestore() {
    const scrollPosition = useRef(0);

    useEffect(() => {
        return () => {
            scrollPosition.current = window.scrollY;
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, scrollPosition.current);
    }, []);

    function restoreScrollPosition() {
        window.scrollTo(0, scrollPosition.current);
    };

    return restoreScrollPosition;
};

export default useScrollRestore;
