"use client"

import { StateSetter } from "../../util";
import { useLocalStorage } from "../useStorage";

type TranslationKeys = { [key: string]: TranslationKeys | string | undefined };

type Translations = {
    [language: string]: TranslationKeys;
};

export type TranslationUseHook = (key: string) => string;

export type TranslationHook<L> = {
    language: L | string | undefined,
    setLanguage: StateSetter<L | string | undefined>,
    fallbackLanguage: L | string | undefined,
    setFallbackLanguage: StateSetter<L | string | undefined>,
    t: TranslationUseHook,
};

export default function useTranslation<L>(translations: Translations, defaultLanguage: L | string = "en"): TranslationHook<L> {
    const [language, setLanguage] = useLocalStorage<L | string>("language", defaultLanguage);
    const [fallbackLanguage, setFallbackLanguage] = useLocalStorage<L | string>("fallbackLanguage", defaultLanguage);

    const translate: TranslationUseHook = (key: string) => {
        const keys = key.split(".");

        return (getNestedTranslation<L>(translations, language, keys) ?? getNestedTranslation<L>(translations, fallbackLanguage, keys) ?? key);
    };

    return {
        language,
        setLanguage,
        fallbackLanguage,
        setFallbackLanguage,
        t: translate,
    };
}

function getNestedTranslation<L>(translations: Translations, language: L | string = "en", keys: string[]): string | undefined {
    const value = keys.reduce((obj: TranslationKeys | string | undefined, key: string) => {
        return typeof obj === "object" ? obj[key] : undefined;
    }, translations[language as string]);

    return value as string | undefined;
}
