import { CallbackEvent, TargetElementRef } from "../../util";
import useEventListener from "../useEventListener";

export default function useClickOutside(ref: TargetElementRef, callback: CallbackEvent): void {
    useEventListener("click", (e: Event) => {
        if (ref.current == null || ref.current.contains(e.target as Node)) return
        callback(e);
    }, document);
}
