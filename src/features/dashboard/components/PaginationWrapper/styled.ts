import styled from "styled-components";

const StyledPaginationWrapper = styled.div`
    .BS-pagination-wrapper--text {
        font-size: ${(p) => p.theme.typography.fontSize.p18};
        line-height: 21px;
        color: ${(p) => p.theme.palette.primaryTextColor};

        > span {
            font-weight: ${(p) => p.theme.typography.weight.bold};
            color: ${(p) => p.theme.palette.accent};
        }
    }
`;

export default StyledPaginationWrapper;
