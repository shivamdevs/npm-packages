"use client";

import { useState } from "react";

export type ToggleHook = [boolean, (value?: boolean) => void];

export default function useToggle(defaultValue?: boolean): ToggleHook {
  const [value, setValue] = useState<boolean>(!!defaultValue);

  function toggleValue(value?: boolean) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue] as const;
}
