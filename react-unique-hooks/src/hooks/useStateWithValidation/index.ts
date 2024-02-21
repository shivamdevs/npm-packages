"use client";

import { useState, useCallback } from "react";

type StateWithValidationCallback<T> = (value: T | undefined) => boolean;
type StateWithValidationChange<T> = (value: T | undefined) => void;

export type StateWithValidationHook<T> = [
  T | undefined,
  StateWithValidationChange<T>,
  boolean
];

export default function useStateWithValidation<T>(
  validationFunc: StateWithValidationCallback<T>,
  initialValue?: T
): StateWithValidationHook<T> {
  const [state, setState] = useState<T | undefined>(initialValue);
  const [isValid, setIsValid] = useState<boolean>(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: T | undefined) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [validationFunc]
  );

  return [state, onChange, isValid];
}
