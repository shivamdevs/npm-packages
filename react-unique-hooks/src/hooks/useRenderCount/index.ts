"use client";

import { useEffect, useRef } from "react";

export type RenderCountHook = number;

export default function useRenderCount(): RenderCountHook {
  const count = useRef<number>(1);

  useEffect(() => {
    count.current++;
  });

  return count.current;
}
