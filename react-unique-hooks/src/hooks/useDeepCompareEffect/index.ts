"use client";

import { useEffect, useRef } from "react";
import isEqual from "../../util/functions/isEqual";
import { Callback, Dependencies } from "../../util";

export default function useDeepCompareEffect(
  callback: Callback,
  dependencies: Dependencies
): void {
  const currentDependenciesRef = useRef<Dependencies>();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
}
