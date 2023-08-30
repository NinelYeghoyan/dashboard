import { FC } from "react";

import Skeleton from "@common/components/Skeleton";
import { StyledTableSkeleton } from "@features/dashboard/components/Table/styled";

type TableSkeletonProps = {
    className?: string;
};

const TableSkeleton: FC<TableSkeletonProps> = ({ className = "" }) => {
    const skeletonMock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <StyledTableSkeleton className={`${className} BS-table--skeleton`}>
            <li className="BS-table--skeleton-head">
                <Skeleton />
            </li>
            {skeletonMock.map((index) => (
                <li key={index} className="BS-table--skeleton-row">
                    <Skeleton />
                </li>
            ))}
        </StyledTableSkeleton>
    );
};

export default TableSkeleton;
