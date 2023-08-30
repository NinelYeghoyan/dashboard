import styled from "styled-components";

const StyledAside = styled.aside`
    width: 240px;
    background-color: ${(p) => p.theme.palette.base};
    border-right: 1px solid ${(p) => p.theme.palette.borderColor};
`;

export default StyledAside;
