import { FC, memo } from "react";
import { useTranslation } from "react-i18next";

import Pagination from "@common/components/Pagination";

import StyledPaginationWrapper from "./styled";

type PaginationWrapperProps = {
    totalUsers: number;
    totalPages: number;
    currentPage: number;
    handlePageChange: (newPage: number) => void;
    className?: string;
};

const PaginationWrapper: FC<PaginationWrapperProps> = ({
    totalUsers,
    totalPages,
    currentPage,
    handlePageChange,
    className = "",
}) => {
    const { t } = useTranslation();

    return (
        <StyledPaginationWrapper className={`${className} BS-pagination-wrapper flex-between`}>
            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />

            <p className="BS-pagination-wrapper--text">
                {t("totalNumberOfUsers")}
                <span className="ml-16">{totalUsers}</span>
            </p>
        </StyledPaginationWrapper>
    );
};

export default memo(PaginationWrapper);
