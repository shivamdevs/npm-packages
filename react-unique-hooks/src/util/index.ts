import React from "react";

export type Callback = () => void;
export type CallbackEvent = (e: Event) => void;
export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
export type Dependencies = React.DependencyList;
export type ErrorHook<E> = Error | ErrorEvent | E | any;

export type TargetElement =
  | HTMLElement
  | Document
  | Window
  | MediaQueryList
  | undefined
  | null;
export type TargetElementPool = HTMLElement | Document | null;
export type TargetElementRef = React.MutableRefObject<TargetElementPool>;
