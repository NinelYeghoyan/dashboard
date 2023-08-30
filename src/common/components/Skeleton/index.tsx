import { FC } from "react";

import StyledSkeleton from "@common/components/Skeleton/styled";

type SkeletonProps = {
    hasBorderRadius?: boolean;
};

const Skeleton: FC<SkeletonProps> = ({ hasBorderRadius = false }) => (
    <StyledSkeleton $hasBorderRadius={hasBorderRadius} className="BS-skeleton" />
);

export default Skeleton;
