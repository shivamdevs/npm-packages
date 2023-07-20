import useAsync from "../useAsync";
import { ErrorHook } from "../../util";

export type ScriptHook<E> = [loading: boolean, error: ErrorHook<E>];

export default function useScript<E>(url: string): ScriptHook<E> {
    const [, loading, error] = useAsync(() => {
        const script: HTMLScriptElement = document.createElement("script");
        script.src = url;
        script.async = true;

        return new Promise((resolve, reject) => {
            script.addEventListener("load", resolve);
            script.addEventListener("error", reject);
            document.body.appendChild(script);
        });
    }, [url]);

    return [loading, error];
}
