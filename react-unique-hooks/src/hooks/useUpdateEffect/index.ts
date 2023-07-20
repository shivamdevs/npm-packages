import { useEffect, useRef } from "react";
import { Callback, Dependencies } from "../../util";

export default function useUpdateEffect(callback: Callback, dependencies: Dependencies = []):void {
    const firstRenderRef = useRef<boolean>(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback();
    }, dependencies);
}
