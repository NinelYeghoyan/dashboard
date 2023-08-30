import { FC } from "react";

import IconChevronLeft from "@assets/icons/ChevronLeft";
import IconChevronRight from "@assets/icons/ChevronRight";

import StyledPagination from "./styled";

type PaginationProps = {
    totalPages: number;
    currentPage: number;
    handlePageChange: (newPage: number) => void;
    className?: string;
};

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, handlePageChange, className = "" }) => {
    const onNext = () => {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
    };

    const onPrevious = () => {
        if (currentPage > 1) handlePageChange(currentPage - 1);
    };

    return (
        <StyledPagination className={`${className} BS-pagination flex item-center`}>
            <li
                role="presentation"
                className={`BS-pagination--item flex-center cursor-pointer ${currentPage === 1 ? "disabled" : ""}`}
                onClick={onPrevious}
            >
                <IconChevronLeft />
            </li>

            {[...Array(totalPages)].map((_, index) => (
                <li
                    key={index + 1}
                    role="presentation"
                    className={`BS-pagination--item flex-center cursor-pointer ${
                        currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </li>
            ))}

            <li
                role="presentation"
                className={`BS-pagination--item flex-center cursor-pointer ${
                    currentPage === totalPages ? "disabled" : ""
                }`}
                onClick={onNext}
            >
                <IconChevronRight />
            </li>
        </StyledPagination>
    );
};

export default Pagination;
