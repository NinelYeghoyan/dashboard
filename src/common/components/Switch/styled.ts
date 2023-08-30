import styled from "styled-components";

const StyledSwitch = styled.label`
    width: 20px;
    height: 10px;
    display: inline-block;
    position: relative;

    > input {
        display: none;
    }

    .BS-switch--slider {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        border-radius: 34px;
        background-color: ${(p) => p.theme.palette.green};
        transition: 0.4s;
        cursor: pointer;

        &:before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 50%;

            position: absolute;
            bottom: 2px;
            left: 2px;

            background-color: ${(p) => p.theme.palette.white};
            transition: 0.4s;
        }
    }

    &.disable {
        .BS-switch--slider {
            background-color: ${(p) => p.theme.palette.red};

            &:before {
                left: calc(100% - 2px);
                transform: translateX(-100%);
            }
        }
    }

    .teeest {
        .BS-switch--slider {
            background-color: orange;

            &:before {
                left: calc(100% - 2px);
                transform: translateX(-100%);
            }
        }
    }
`;

export default StyledSwitch;
