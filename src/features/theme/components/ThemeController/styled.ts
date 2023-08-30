import styled from "styled-components";

const StyledThemeController = styled.div`
    .BS-theme-controller--text {
        font-size: ${(p) => p.theme.typography.fontSize.p12};
        line-height: 14px;
        color: ${(p) => p.theme.palette.secondaryTextColor};
    }

    .BS-theme-controller--inner {
        width: 80px;
        border: 2px solid ${(p) => p.theme.palette.borderColor};
        border-radius: ${({ theme }) => theme.borderRadius.radius20};
    }

    .BS-theme-controller--button {
        width: 26px;
        height: 26px;

        border: none;
        margin: 0;
        padding: 0;
        background-color: transparent;

        > img {
            width: 100%;
        }
    }
`;

export default StyledThemeController;
