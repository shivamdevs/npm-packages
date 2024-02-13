"use client"

import { useEffect } from "react";
import { Callback } from "../../util";

export default function useEffectOnce(cb: Callback): void {
    useEffect(cb, []);
}
