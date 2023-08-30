import { FC, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch } from "@app/hooks/useAppDispatch";
import PageHeader from "@common/components/PageHeader";
import Form from "@features/user/components/Form";
import { useCreateUserMutation, useEditUserMutation, useGetUserQuery } from "@features/user/userAPI";
import { updateMessage } from "@features/user/userSlice";
import { OnSubmit, UserType } from "@features/user/userTypes";
import PageLayout from "@layout/PageLayout";
import { routes } from "@routes/routes";

const User: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [editUser] = useEditUserMutation();
    const [createUser] = useCreateUserMutation();
    const { data: userItem } = useGetUserQuery({ id: Number(id) });

    const isEditMode = !!id;

    const handleRedirect = () => {
        navigate(routes.home.path);
    };

    const handleSubmit: OnSubmit = useCallback(
        (userData: UserType, userId?: number) => {
            if (isEditMode && userId) {
                editUser({ id: userId, body: userData });
                dispatch(updateMessage("SHOW_EDIT_USER_MESSAGE"));
            } else {
                createUser(userData);
                dispatch(updateMessage("SHOW_NEW_USER_MESSAGE"));
            }

            navigate(routes.home.path);

            setTimeout(() => {
                dispatch(updateMessage(""));
            }, 2000);
        },
        [editUser, createUser, navigate, isEditMode],
    );

    return (
        <PageLayout className={`BS-${isEditMode ? "edit" : "new"}-user`}>
            <PageHeader title={isEditMode ? "editUser" : "newUser"} buttonText="allUsers" onRedirect={handleRedirect} />

            <Form onSubmit={handleSubmit} userItem={userItem} />
        </PageLayout>
    );
};

export default User;
