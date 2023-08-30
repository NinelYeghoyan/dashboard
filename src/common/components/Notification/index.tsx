import { FC } from "react";
import { useTranslation } from "react-i18next";

import { normalizeKey } from "@common/utils";

import StyledNotification from "./styled";

type NotificationProps = {
    text: string;
    className?: string;
};

const Notification: FC<NotificationProps> = ({ text = "", className = "" }) => {
    const { t } = useTranslation();

    return (
        <StyledNotification className={`${className} BS-notification flex items-center`}>
            <div className="BS-notification--success" />

            <div className="BS-notification--text ph-16">{t(normalizeKey(text))}</div>
        </StyledNotification>
    );
};

export default Notification;
