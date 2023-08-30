import { FC, memo, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import IconEmail from "@assets/icons/Email";
import IconTrash from "@assets/icons/Trash";
import Avatar from "@common/components/Avatar";
import EditAction from "@common/components/EditAction";
import Switch from "@common/components/Switch";
import Tooltip from "@common/components/Tooltip";
import CopyTooltip from "@common/components/Tooltip/Copy";
import TrashTooltip from "@common/components/Tooltip/Trash";
import { useCopy } from "@common/hooks/useCopy";
import { useDeleteUserMutation, useUpdateStateMutation } from "@features/dashboard/dashboardAPI";
import { UserType } from "@features/user/userTypes";
import { routes } from "@routes/routes";

import { StyledTableRow } from "./styled";

type TableRowProps = {
    item: UserType;
};

const TableRow: FC<TableRowProps> = ({ item }) => {
    const navigate = useNavigate();
    const { handleCopy } = useCopy(item?.email);
    const [deleteUserMutation] = useDeleteUserMutation();
    const [updateStateMutation] = useUpdateStateMutation();

    const handleRedirect = () => {
        navigate(routes.editUser.getPath(item?.id));
    };
    const handleDeleteUser = (userId: number) => {
        deleteUserMutation({ id: userId });
    };

    const handleUpdateState = (userId: number, userSate: boolean) => {
        updateStateMutation({ id: userId, state: userSate });
    };

    return (
        <StyledTableRow className="BS-table-row flex items-center">
            <li className="width-130 flex items-center pl-34">
                <Avatar image={item.photo} />
            </li>
            <li className="width-226 flex items-center grow pl-24">{item.name}</li>
            <li className="width-220 flex items-center pl-24">{item.location}</li>
            <li className="width-280 flex items-center pl-24">{item.registeredDate}</li>
            <li className="width-390 flex items-center pl-24">{item.lastActiveDate}</li>
            <li className="width-146 flex items-center relative pl-24">
                <Tooltip onCopy={handleCopy} icon={<IconEmail />}>
                    <CopyTooltip text="isCopied" email={item.email} />
                </Tooltip>
            </li>

            <li className="width-140 flex-between pr-34">
                <Switch
                    id={item.id}
                    state={item.disabled}
                    onUpdateState={(e: MouseEvent<HTMLLabelElement>) => {
                        e.preventDefault();
                        handleUpdateState(item.id, !item.disabled);
                    }}
                />

                <EditAction onRedirect={handleRedirect} className="mh-16" />

                <Tooltip icon={<IconTrash />} mode="right">
                    <TrashTooltip onDeleteUser={() => handleDeleteUser(item.id)} />
                </Tooltip>
            </li>
        </StyledTableRow>
    );
};

export default memo(TableRow);
