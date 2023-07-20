import { useEffect } from "react";
import useMediaQuery from "../useMediaQuery";
import { useLocalStorage } from "../useStorage";
import { StateSetter } from "../../util";

export type DarkModeHook = [enabled: boolean, setDarkMode: StateSetter<boolean>];

export default function useDarkMode(token: string = "dark-mode"): DarkModeHook {
    const [darkMode, setDarkMode] = useLocalStorage("useDarkMode");
    const prefersDarkMode: boolean = useMediaQuery("(prefers-color-scheme: dark)");
    const enabled: boolean = !!(darkMode ?? prefersDarkMode);

    useEffect(() => {
        document.body.classList.toggle(token, enabled);
    }, [enabled]);

    return [enabled, setDarkMode];
}
