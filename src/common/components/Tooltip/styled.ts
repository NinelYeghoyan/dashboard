import styled from "styled-components";

export const StyledTooltip = styled.div`
    width: max-content;

    .BS-tooltip--icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;

        > svg {
            cursor: pointer;
        }
    }

    .BS-tooltip--content {
        position: absolute;
        bottom: 32px;
        z-index: 1;

        transition: 0.2s 0.1s ease-in-out;

        border-radius: ${({ theme }) => theme.borderRadius.radius10};
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
        filter: drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.05));

        background-color: ${({ theme }) => theme.palette.tooltipBackgroundColor};
        color: ${({ theme }) => theme.palette.tooltipTextColor};

        &:after {
            content: "";

            position: absolute;
            top: 100%;

            border-width: 10px;
            border-style: solid;
            border-color: ${({ theme }) => theme.palette.tooltipBackgroundColor} transparent transparent transparent;
        }

        &.center {
            left: 50%;
            transform: translateX(-50%);

            &:after {
                left: 50%;
                transform: translateX(-50%);
            }
        }

        &.right {
            right: -16px;

            &:after {
                right: 16px;
            }
        }

        &.left {
            left: -16px;

            &:after {
                left: 16px;
            }
        }
    }
`;
