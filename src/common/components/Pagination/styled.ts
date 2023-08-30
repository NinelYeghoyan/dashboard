import styled from "styled-components";

const StyledPagination = styled.ul`
    margin-right: -4px;
    margin-left: -4px;

    > li {
        min-width: 28px;
        height: 28px;
        margin-right: 4px;
        margin-left: 4px;

        font-size: ${(p) => p.theme.typography.fontSize.p12};

        border-radius: ${(p) => p.theme.borderRadius.radius4};
        background-color: ${(p) => p.theme.palette.secondary};
        color: ${(p) => p.theme.palette.primaryTextColor};
        transition: 0.2s 0.1s ease-in-out;
    }

    .BS-pagination--item {
        &:hover,
        &.active {
            border-color: transparent;
            background-color: ${(p) => p.theme.palette.accent};
            color: ${(p) => p.theme.palette.base};
        }
    }
`;

export default StyledPagination;
