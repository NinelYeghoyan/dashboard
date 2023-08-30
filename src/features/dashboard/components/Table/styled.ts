import styled from "styled-components";

const StyledTable = styled.div`
    width: 100%;
    min-width: 100%;
    overflow-y: auto;

    border-radius: ${(p) => p.theme.borderRadius.radius20};
    background-color: ${(p) => p.theme.palette.secondary};
`;

const StyledTableHead = styled.ul`
    color: ${(p) => p.theme.palette.primaryTextColor};

    > li {
        height: 54px;

        font-size: ${(p) => p.theme.typography.fontSize.p12};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        line-height: 14px;

        border-bottom: 2px solid ${(p) => p.theme.palette.accent};
    }

    .BS-table-head--icons {
        display: flex;
        flex-direction: column;

        > button {
            width: 8px;
            height: 6px;

            border: none;
            margin: 1px 0;
            padding: 0;
            background-color: transparent;
            color: ${(p) => p.theme.palette.secondaryIconColor};
        }
    }
`;

const StyledTableRow = styled.ul`
    > li {
        height: 60px;

        font-size: ${(p) => p.theme.typography.fontSize.p12};
        line-height: 14px;
        color: ${(p) => p.theme.palette.secondaryTextColor};

        border-bottom: 2px solid ${(p) => p.theme.palette.base};
    }
`;

const StyledTableSkeleton = styled.ul`
    width: 100%;
    border-radius: ${(p) => p.theme.borderRadius.radius20};
    overflow: hidden;

    .BS-table--skeleton-head {
        height: 54px;
        border-bottom: 2px solid ${(p) => p.theme.palette.accent};
    }

    .BS-table--skeleton-row {
        height: 60px;
        border-bottom: 2px solid ${(p) => p.theme.palette.base};
    }
`;

export default StyledTable;
export { StyledTableHead, StyledTableRow, StyledTableSkeleton };
