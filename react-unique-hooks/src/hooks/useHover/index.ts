import { useState } from "react"
import useEventListener from "../useEventListener";
import { TargetElement } from "../../util";

export type HoverHook = boolean;

export default function useHover(ref: { current: TargetElement }): HoverHook {
    const [hovered, setHovered] = useState<boolean>(false);

    useEventListener("mouseover", () => setHovered(true), ref.current);
    useEventListener("mouseout", () => setHovered(false), ref.current);

    return hovered;
}
