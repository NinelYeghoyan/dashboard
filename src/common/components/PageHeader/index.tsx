import { FC } from "react";
import { useTranslation } from "react-i18next";

import { normalizeKey } from "@common/utils";

import Button from "../Button";

import StyledPageHeader from "./styled";

type PageHeaderProps = {
    title: string;
    buttonText: string;
    onRedirect?: () => void;
};

const PageHeader: FC<PageHeaderProps> = ({ title = "", buttonText = "", onRedirect }) => {
    const { t } = useTranslation();

    return (
        <StyledPageHeader className="BS-page-header flex-between">
            <h6 className="BS-page-header--title shrink-0">{t(normalizeKey(title))}</h6>

            <Button onClick={onRedirect} variant="primary" type="button" size="small">
                {t(normalizeKey(buttonText))}
            </Button>
        </StyledPageHeader>
    );
};

export default PageHeader;
