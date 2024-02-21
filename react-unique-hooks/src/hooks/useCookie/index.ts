"use client";

import { useState, useCallback } from "react";
import Cookies from "js-cookie";
import { Callback } from "../../util";

type CallbackUpdate = (
  newValue: string,
  options?: Cookies.CookieAttributes
) => void;

export type CookieHook = [string | undefined | null, CallbackUpdate, Callback];

export default function useCookie(
  name: string,
  defaultValue: string = ""
): CookieHook {
  const [value, setValue] = useState<string | undefined | null>(() => {
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const updateCookie: CallbackUpdate = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie: Callback = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie];
}
