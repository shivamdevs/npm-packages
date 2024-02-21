"use client";

import { CallbackEvent, TargetElementRef } from "../../util";
import useEventListener from "../useEventListener";

export default function useClickOutside(
  ref: TargetElementRef,
  callback: CallbackEvent,
  event?: string
): void {
  useEventListener(
    event || "click",
    (e: Event) => {
      if (ref.current == null || ref.current.contains(e.target as Node)) return;
      callback(e);
    },
    document
  );
}
