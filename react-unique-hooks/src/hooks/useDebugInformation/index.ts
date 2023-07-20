import { useEffect, useRef } from "react"
import useRenderCount from "../useRenderCount";

export type DebugInformationPropHook = {
    [key: string]: any;
};

export type DebugInformationHook = {
    count: number;
    changedProps: DebugInformationPropHook;
    timeSinceLastRender: number;
    lastRenderTimestamp: number;
};

export default function useDebugInformation(componentName: string, props: DebugInformationPropHook): DebugInformationHook {
    const count = useRenderCount();
    const changedProps = useRef<any>({});
    const previousProps = useRef<any>(props);
    const lastRenderTimestamp = useRef<number>(Date.now());

    const propKeys: string[] = Object.keys({ ...props, ...previousProps });

    changedProps.current = propKeys.reduce((obj, key) => {
        if (props[key] === previousProps.current[key]) return obj;
        return {
            ...obj,
            [key]: { previous: previousProps.current[key], current: props[key] },
        }
    }, {});

    const info: DebugInformationHook = {
        count,
        changedProps: changedProps.current,
        timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
        lastRenderTimestamp: lastRenderTimestamp.current,
    };

    useEffect(() => {
        previousProps.current = props;
        lastRenderTimestamp.current = Date.now();
        console.log("[debug-info]", componentName, info);
    });

    return info;
}
