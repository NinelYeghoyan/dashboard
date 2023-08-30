import { FC } from "react";
import { useTranslation } from "react-i18next";

import { StyledCopyTooltip } from "@common/components/Tooltip/Copy/styled";
import { normalizeKey } from "@common/utils";

type CopyTooltipProps = {
    text?: string;
    email?: string;
};

const CopyTooltip: FC<CopyTooltipProps> = ({ text = "", email = "" }) => {
    const { t } = useTranslation();

    return (
        <StyledCopyTooltip className="BS-tooltip-copy">
            <span>{email}</span>
            <span>{t(normalizeKey(text))}</span>
        </StyledCopyTooltip>
    );
};

export default CopyTooltip;
