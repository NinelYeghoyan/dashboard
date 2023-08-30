import { useCallback, useEffect, useRef, useState } from "react";

export const useTooltip = () => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    const toggleTooltip = useCallback(() => {
        setShowTooltip((state) => !state);
    }, []);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
            setShowTooltip(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return { tooltipRef, showTooltip, toggleTooltip };
};
