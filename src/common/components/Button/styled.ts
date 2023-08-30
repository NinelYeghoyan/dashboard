import styled from "styled-components";

const StyledButton = styled.button<{ $isFullWidth: boolean }>`
    width: ${(props) => (props.$isFullWidth ? "100%" : "fit-content")};

    font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
    font-weight: ${({ theme }) => theme.typography.weight.medium};

    border: none;
    transition: 0.2s 0.1s ease-in-out;

    &.primary {
        background-color: ${(p) => p.theme.palette.primaryButtonBackgroundColor};
        color: ${(p) => p.theme.palette.primaryButtonTextColor};
    }

    &.secondary {
        background-color: ${(p) => p.theme.palette.secondaryButtonBackgroundColor};
        color: ${(p) => p.theme.palette.secondaryButtonTextColor};
    }

    &.danger {
        background-color: ${(p) => p.theme.palette.red};
        color: ${(p) => p.theme.palette.white};
    }

    &.disable {
        pointer-events: none;
        touch-action: none;
        background-color: ${(p) => p.theme.palette.disableButtonBackgroundColor};
        color: ${(p) => p.theme.palette.disableButtonTextColor};
    }

    &.extra-small {
        height: 26px;
        border-radius: ${({ theme }) => theme.borderRadius.radius6};
        font-size: ${({ theme }) => theme.typography.fontSize.p12};
        line-height: 14px;
    }

    &.small {
        height: 36px;
        border-radius: ${({ theme }) => theme.borderRadius.radius8};
        font-size: ${({ theme }) => theme.typography.fontSize.p12};
        line-height: 14px;
    }

    &.medium {
        height: 38px;
        border-radius: ${({ theme }) => theme.borderRadius.radius10};
        font-size: ${({ theme }) => theme.typography.fontSize.p14};
        line-height: 16px;
    }

    &.large {
        height: 40px;
        border-radius: ${({ theme }) => theme.borderRadius.radius12};
        font-size: ${({ theme }) => theme.typography.fontSize.p16};
        line-height: 18px;
    }
`;

export default StyledButton;
