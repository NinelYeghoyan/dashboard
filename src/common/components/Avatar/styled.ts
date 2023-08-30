import styled from "styled-components";

const StyledAvatar = styled.div<{ $isProfileAvatar: boolean }>`
    width: ${(props) => (props.$isProfileAvatar ? "80px" : "40px")};
    height: ${(props) => (props.$isProfileAvatar ? "80px" : "40px")};
    overflow: hidden;

    border-radius: 50%;
    background-color: ${(props) => (props.$isProfileAvatar ? props.theme.palette.secondary : props.theme.palette.base)};
`;

export default StyledAvatar;
