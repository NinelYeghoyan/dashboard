import { cloneElement, FC, ReactElement, ReactNode, useCallback } from "react";

import { useTooltip } from "@common/hooks/useTooltip";

import { StyledTooltip } from "./styled";

type TooltipProps = {
    children: ReactElement;
    icon: ReactNode;
    mode?: "center" | "right" | "left";
    onCopy?: () => void;
    className?: string;
};

const Tooltip: FC<TooltipProps> = ({ children, icon, mode = "center", onCopy = () => undefined, className = "" }) => {
    const { tooltipRef, showTooltip, toggleTooltip } = useTooltip();

    const handleClick = useCallback(() => {
        toggleTooltip();
        onCopy();
    }, [onCopy, toggleTooltip]);

    return (
        <StyledTooltip ref={tooltipRef} className={`${className} BS-tooltip relative inline-block`}>
            <div
                role="button"
                tabIndex={0}
                onClick={handleClick}
                onKeyDown={handleClick}
                className="BS-tooltip--icon flex-center cursor-pointer"
            >
                {icon}
            </div>

            {showTooltip && (
                <div className={`${mode} BS-tooltip--content ph-16 pv-10`}>
                    {cloneElement(children, { onCloseTooltip: toggleTooltip })}
                </div>
            )}
        </StyledTooltip>
    );
};

export default Tooltip;
