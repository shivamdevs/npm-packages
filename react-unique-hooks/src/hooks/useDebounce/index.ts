"use client";

import { useEffect } from "react";
import useTimeout from "../useTimeout";
import { Callback, Dependencies } from "../../util";

export default function useDebounce(
  callback: Callback,
  delay: number = 0,
  dependencies: Dependencies = []
): void {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
