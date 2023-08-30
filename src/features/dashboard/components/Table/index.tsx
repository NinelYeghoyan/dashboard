import { FC, memo } from "react";

import { UserType } from "@features/user/userTypes";

import TableHead from "./Head";
import TableRow from "./Row";
import StyledTable from "./styled";

type TableProps = {
    data: UserType[];
    handleSortChange: (newSort: string, newOrder: string) => void;
    className?: string;
};

const Table: FC<TableProps> = ({ data, handleSortChange, className = "" }) => (
    <StyledTable className={`${className} BS-table`}>
        <TableHead handleSortChange={handleSortChange} />

        <div className="BS-table--body">
            {data?.map((item) => (
                <TableRow key={item.id} item={item} />
            ))}
        </div>
    </StyledTable>
);

export default memo(Table);
