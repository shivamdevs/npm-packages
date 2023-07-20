import { useState } from "react";
import copy from "copy-to-clipboard";

export interface CopyToClipboardOptionsHook {
    debug?: boolean;
    message?: string;
    format?: string;
    onCopy?: (clipboardData: object) => void;
}

export type CopyToClipboardHook = [(text: string, options?: CopyToClipboardOptionsHook) => boolean, { value: string, success: boolean }];

export default function useCopyToClipboard() {
    const [value, setValue] = useState<string>("");
    const [success, setSuccess] = useState<boolean>(false);

    const copyToClipboard = (text: string, options?: CopyToClipboardOptionsHook) => {
        const result = copy(text, options);
        if (result) setValue(text);
        setSuccess(result);
    }

    return [copyToClipboard, { value, success }];
}
