import { FC } from "react";
import { useTranslation } from "react-i18next";

import Button from "@common/components/Button";
import { StyledTrashTooltip } from "@common/components/Tooltip/Trash/styled";

type TrashTooltipProps = {
    onCloseTooltip?: () => void;
    onDeleteUser?: () => void;
};

const TrashTooltip: FC<TrashTooltipProps> = ({ onCloseTooltip, onDeleteUser }) => {
    const { t } = useTranslation();

    return (
        <StyledTrashTooltip className="BS-tooltip-trash">
            <h6 className="BS-tooltip-trash--title space-pre-line mb-16">{t("deleteThisUser")}</h6>

            <div className="flex-between">
                <Button onClick={onCloseTooltip} size="extra-small">
                    {t("cancel")}
                </Button>
                <Button onClick={onDeleteUser} variant="danger" size="extra-small" className="ml-10">
                    {t("delete")}
                </Button>
            </div>
        </StyledTrashTooltip>
    );
};

export default TrashTooltip;
