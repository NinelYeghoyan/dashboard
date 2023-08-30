import { FC } from "react";

import IconEdit from "@assets/icons/Edit";
import StyledEditAction from "@common/components/EditAction/styled";

type EditActionProps = {
    onRedirect?: () => void;
    className?: string;
};

const EditAction: FC<EditActionProps> = ({ onRedirect, className }) => (
    <StyledEditAction onClick={onRedirect} className={`${className} BS-edit-action cursor-pointer`}>
        <IconEdit />
    </StyledEditAction>
);

export default EditAction;
