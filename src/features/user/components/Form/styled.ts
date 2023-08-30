import styled from "styled-components";

const StyledForm = styled.div`
    max-width: 1140px;
    min-height: 610px;
    border: 1px solid ${(p) => p.theme.palette.borderColor};
    border-radius: ${(p) => p.theme.borderRadius.radius20};

    > form {
        width: 396px;
    }
`;

export default StyledForm;
