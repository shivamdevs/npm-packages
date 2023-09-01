import { useEffect, useRef } from "react";
import { TargetElement } from "../../util";

type EventCallback = (e: Event | MediaQueryListEvent | any) => void;

export default function useEventListener(eventType: any, callback: EventCallback, element: TargetElement = window, options?: boolean | AddEventListenerOptions): void {
    const callbackRef = useRef<EventCallback>(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (element == null) return;
        const handler: EventCallback = e => callbackRef.current(e);

        element.addEventListener(eventType, handler, options);

        return () => element.removeEventListener(eventType, handler);
    }, [eventType, element]);
}
