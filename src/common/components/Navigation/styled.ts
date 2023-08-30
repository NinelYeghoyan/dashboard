import styled from "styled-components";

const StyledNavigation = styled.nav`
    .BS-nav--item {
        height: 42px;
        transition: 0.2s 0.1s ease-in-out;
        color: ${(p) => p.theme.palette.primaryTextColor};

        &.active,
        &:hover {
            border-radius: ${(p) => p.theme.borderRadius.radius12};
            background-color: ${(p) => p.theme.palette.secondary};

            .BS-nav--title {
                color: ${(p) => p.theme.palette.primaryTextColor};
            }
        }
    }

    .BS-nav--title {
        font-size: ${(p) => p.theme.typography.fontSize.p14};
        line-height: 16px;
        color: ${(p) => p.theme.palette.secondaryTextColor};
    }
`;

export default StyledNavigation;
