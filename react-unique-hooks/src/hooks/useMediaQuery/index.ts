"use client";

import { useState, useEffect } from "react";
import useEventListener from "../useEventListener";
import win from "../../util/window";

export type MediaQueryHook = boolean;

export default function useMediaQuery(mediaQuery: string): MediaQueryHook {
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(
    null
  );

  useEffect(() => {
    const list = win?.matchMedia(mediaQuery) ?? null;
    setMediaQueryList(list);
    setIsMatch(list?.matches ?? false);
  }, [mediaQuery]);

  useEventListener(
    "change",
    (e: MediaQueryListEvent) => setIsMatch(e.matches),
    mediaQueryList
  );

  return isMatch;
}
