import { useState } from "react"
import useEventListener from "../useEventListener";

export type OnlineStatusHook = boolean;

export default function useOnlineStatus(): OnlineStatusHook {
    const [online, setOnline] = useState<boolean>(navigator.onLine);

    useEventListener("online", () => setOnline(navigator.onLine));
    useEventListener("offline", () => setOnline(navigator.onLine));

    return online;
}
