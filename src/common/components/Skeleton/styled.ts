import styled, { keyframes } from "styled-components";

const animate = keyframes`
  to {
    background-position: right -40px top 0;
  }
`;

const StyledSkeleton = styled.div<{ $hasBorderRadius: boolean }>`
    width: 100%;
    height: 100%;

    border-radius: ${(props) => (props.$hasBorderRadius ? ({ theme }) => theme.borderRadius.radius10 : "0")};

    background-color: ${({ theme }) => theme.palette.secondary};
    background-image: linear-gradient(
        90deg,
        ${(p) => p.theme.palette.transparent},
        ${(p) => p.theme.palette.transparent05},
        ${(p) => p.theme.palette.transparent}
    );

    background-repeat: no-repeat;
    background-position: left -40px top 0;
    background-size: 40px 100%;

    animation: ${animate} 1s ease infinite;
`;

export default StyledSkeleton;
