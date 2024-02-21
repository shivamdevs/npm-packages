"use client";

import { useState } from "react";
import copy from "copy-to-clipboard";

export interface CopyToClipboardOptionsHook {
  debug?: boolean;
  message?: string;
  format?: string;
  onCopy?: (clipboardData: object) => void;
}

export type CopyToClipboardCallback = (
  text: string,
  options?: CopyToClipboardOptionsHook
) => void;

export type CopyToClipboardHook = [
  CopyToClipboardCallback,
  { value: string; success: boolean }
];

export default function useCopyToClipboard(): CopyToClipboardHook {
  const [value, setValue] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const copyToClipboard = (
    text: string,
    options?: CopyToClipboardOptionsHook
  ) => {
    setSuccess(false);
    setValue("");
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
    return result;
  };

  return [copyToClipboard, { value, success }];
}
