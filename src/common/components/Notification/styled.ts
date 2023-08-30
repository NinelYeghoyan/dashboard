import styled from "styled-components";

const StyledNotification = styled.div`
    border-radius: ${({ theme }) => theme.borderRadius.radius10};
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    filter: drop-shadow(0px 2px 15px rgba(0, 0, 0, 0.05)) drop-shadow(0px 2px 30px rgba(0, 0, 0, 0.05));

    background-color: ${({ theme }) => theme.palette.secondary};

    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;

    .BS-notification--success {
        width: 20px;
        height: 48px;
        background-color: ${({ theme }) => theme.palette.green};
    }

    .BS-notification--text {
        font-size: ${(p) => p.theme.typography.fontSize.p16};
        font-weight: ${(p) => p.theme.typography.weight.medium};
        text-align: center;
        color: ${({ theme }) => theme.palette.primaryTextColor};
    }
`;

export default StyledNotification;
