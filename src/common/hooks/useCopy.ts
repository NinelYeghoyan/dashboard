import { useCallback, useState } from "react";

export const useCopy = (text: string) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = useCallback(() => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setIsCopied(true);
            })
            .catch(() => {
                setIsCopied(false);
            });
    }, [text]);

    return { isCopied, handleCopy };
};
