import { FC } from "react";

import { StyledLoader } from "@common/components/Loader/styled";

const Loader: FC = () => (
    <StyledLoader className="BS-animation-load w100 h100 flex-center">
        <span className="BS-animation-load-button BS-animation-load-button-single" />
        <span className="BS-animation-load-button BS-animation-load-button-double" />
        <span className="BS-animation-load-button BS-animation-load-button-single" />
        <span className="BS-animation-load-button BS-animation-load-button-double" />
    </StyledLoader>
);

export default Loader;
