"use client";

import { useEffect, useRef } from "react";

function useDocumentTitle(
  titleText: string[] | string,
  joiner: string = " • "
): null {
  const title = useRef<string[]>([]);

  useEffect(() => {
    title.current = (
      !Array.isArray(titleText) ? [titleText] : titleText
    ).filter((t) => !!t);

    const baseTitle = document.head
      .querySelector("title")
      ?.getAttribute("base");
    baseTitle && title.current.push(baseTitle);

    document.title = title.current.join(joiner);
  }, [joiner, titleText]);
  return null;
}

export default useDocumentTitle;
