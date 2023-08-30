import styled from "styled-components";

const StyledPageHeader = styled.div`
    .BS-page-header--title {
        font-size: ${(p) => p.theme.typography.fontSize.p24};
        line-height: 21px;
        text-transform: capitalize;
        color: ${(p) => p.theme.palette.accentTextColor};
    }

    .BS-button {
        min-width: 114px;
    }
`;

export default StyledPageHeader;
