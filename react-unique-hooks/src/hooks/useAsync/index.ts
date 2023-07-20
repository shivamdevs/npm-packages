import { useCallback, useEffect, useState } from "react";
import { Dependencies, ErrorHook } from "../../util";

type PromiseCallback<T> = () => Promise<T>;

export type AsyncHook<T, E> = [value: T | undefined, loading: boolean, error: ErrorHook<E>];

export default function useAsync<T, E>(callback: PromiseCallback<T>, dependencies: Dependencies = []): AsyncHook<T, E> {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorHook<E>>();
    const [value, setValue] = useState<T | undefined>();

    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch((e: ErrorHook<E>) => setError(e))
            .finally(() => setLoading(false));
    }, dependencies);

    useEffect(() => {
        callbackMemoized();
    }, [callbackMemoized]);

    return [value, loading, error];
}
