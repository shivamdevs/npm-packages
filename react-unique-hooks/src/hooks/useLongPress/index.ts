import useEventListener from "../useEventListener";
import useTimeout from "../useTimeout";
import useEffectOnce from "../useEffectOnce";
import { Callback, TargetElement } from "../../util";

export default function useLongPress(ref: { current: TargetElement }, callback: Callback, delay: number = 250): void {
    const { reset, clear } = useTimeout(callback, delay);
    useEffectOnce(clear);

    useEventListener("mousedown", reset, ref.current);
    useEventListener("touchstart", reset, ref.current);

    useEventListener("mouseup", clear, ref.current);
    useEventListener("mouseleave", clear, ref.current);
    useEventListener("touchend", clear, ref.current);
}
