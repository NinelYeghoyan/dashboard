import { FC, MouseEvent } from "react";

import StyledSwitch from "./styled";

type SwitchProps = {
    state?: boolean;
    id?: number;
    onUpdateState?: (e: MouseEvent<HTMLLabelElement>) => void;
    className?: string;
};

const Switch: FC<SwitchProps> = ({ state = false, id, onUpdateState, className }) => (
    <StyledSwitch
        onClick={onUpdateState}
        className={`${className} ${state ? "disable" : "teeest"} BS-switch shrink-0`}
        htmlFor={`switch-${id}`}
    >
        <input type="checkbox" id={`switch-${id}`} />
        <div className="BS-switch--slider" />
    </StyledSwitch>
);

export default Switch;
