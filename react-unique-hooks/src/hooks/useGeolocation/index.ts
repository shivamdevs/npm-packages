import { useState, useEffect } from "react";
import { ErrorHook } from "../../util";

export type GeolocationDataHook = {};

export type GeolocationHook<E> = [GeolocationDataHook, boolean, ErrorHook<E>];

export default function useGeolocation<E>(options?: PositionOptions): GeolocationHook<E> {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorHook<E>>();
    const [data, setData] = useState<GeolocationDataHook>({});

    useEffect(() => {
        const successHandler = (e: GeolocationPosition) => {
            setLoading(false)
            setError(null)
            setData(e.coords)
        }
        const errorHandler = (e: GeolocationPositionError) => {
            setError(e)
            setLoading(false)
        }
        navigator.geolocation.getCurrentPosition(
            successHandler,
            errorHandler,
            options
        );
        const id = navigator.geolocation.watchPosition(
            successHandler,
            errorHandler,
            options
        );
        return () => navigator.geolocation.clearWatch(id);
    }, [options])

    return [data, loading, error];
}
