import styled from "styled-components";

const StyledPageLayout = styled.div`
    .BS-main {
        height: 100vh;
        width: calc(100% - 240px);
        overflow-y: auto;
        background-color: ${(p) => p.theme.palette.base};
    }
`;

export default StyledPageLayout;
