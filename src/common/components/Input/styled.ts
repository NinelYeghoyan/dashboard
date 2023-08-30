import styled from "styled-components";

export const StyledInput = styled.div`
    > input {
        width: 100%;
        height: 35px;

        font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
        font-weight: ${({ theme }) => theme.typography.weight.regular};
        line-height: 14px;
        letter-spacing: 0.5px;

        border: none;

        &::placeholder {
            font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
            line-height: 14px;
            letter-spacing: 0.5px;
        }

        &:focus {
            outline: none;
        }

        &.primary {
            background-color: ${({ theme }) => theme.palette.primary};
            color: ${({ theme }) => theme.palette.secondaryTextColor};

            &::placeholder {
                color: ${({ theme }) => theme.palette.secondaryTextColor};
            }
        }

        &.secondary {
            background-color: ${({ theme }) => theme.palette.secondary};
            color: ${({ theme }) => theme.palette.secondaryTextColor};

            &::placeholder {
                color: ${({ theme }) => theme.palette.secondaryTextColor};
            }
        }

        &.disable {
            pointer-events: none;
            touch-action: none;
            background-color: ${({ theme }) => theme.palette.disableButtonBackgroundColor};
            color: ${({ theme }) => theme.palette.disableButtonTextColor};

            &::placeholder {
                color: ${({ theme }) => theme.palette.disableButtonTextColor};
            }
        }

        &.small {
            font-size: ${({ theme }) => theme.typography.fontSize.p12};
            border-radius: ${({ theme }) => theme.borderRadius.radius8};

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p12};
            }
        }

        &.medium {
            font-size: ${({ theme }) => theme.typography.fontSize.p16};
            border-radius: ${({ theme }) => theme.borderRadius.radius10};

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p16};
            }
        }

        &.large {
            font-size: ${({ theme }) => theme.typography.fontSize.p18};
            border-radius: ${({ theme }) => theme.borderRadius.radius12};

            &::placeholder {
                font-size: ${({ theme }) => theme.typography.fontSize.p18};
            }
        }
    }
`;
