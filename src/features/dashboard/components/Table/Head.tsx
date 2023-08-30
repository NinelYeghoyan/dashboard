import { FC } from "react";
import { useTranslation } from "react-i18next";

import IconSortDown from "@assets/icons/SortDown";
import IconSortUp from "@assets/icons/SortUp";

import { StyledTableHead } from "./styled";

type TableHeadProps = {
    handleSortChange: (newSort: string, newOrder: string) => void;
};

const TableHead: FC<TableHeadProps> = ({ handleSortChange }) => {
    const { t } = useTranslation();

    return (
        <StyledTableHead className="BS-table-head flex items-center">
            <li className="width-130 flex items-center pl-34">
                {t("photo")}

                <div className="BS-table-head--icons ml-12">
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("photo", "asc")}
                    >
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("photo", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-226 flex items-center grow pl-24">
                {t("name")}

                <div className="BS-table-head--icons ml-12 cursor-pointer">
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("name", "asc")}
                    >
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("name", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-220 flex items-center pl-24">
                {t("location")}

                <div className="BS-table-head--icons ml-12 cursor-pointer">
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("location", "asc")}
                    >
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("location", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-280 flex items-center pl-24">
                {t("registeredDate")}

                <div className="BS-table-head--icons ml-12 cursor-pointer">
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("registeredDate", "asc")}
                    >
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("registeredDate", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-390 flex items-center pl-24">
                {t("lastActiveDate")}

                <div className="BS-table-head--icons ml-12 cursor-pointer">
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("lastActiveDate", "asc")}
                    >
                        <IconSortUp />
                    </button>
                    <button
                        type="button"
                        className="flex-center cursor-pointer"
                        onClick={() => handleSortChange("lastActiveDate", "desc")}
                    >
                        <IconSortDown />
                    </button>
                </div>
            </li>
            <li className="width-146 flex items-center pl-24">{t("email")}</li>
            <li className="width-140 flex-center pr-34">{t("actions")}</li>
        </StyledTableHead>
    );
};

export default TableHead;
