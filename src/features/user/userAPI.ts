import { api } from "@app/api";
import { getUserURL, postUserImageURl, postUserURL, putUserURl } from "@features/user/userEndpoints";
import { UserType } from "@features/user/userTypes";

export const userAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<UserType, { id: number }>({
            query: ({ id }) => ({
                url: getUserURL(id),
                method: "GET",
            }),
        }),
        createUser: builder.mutation<unknown, UserType>({
            query: (body) => ({
                url: postUserURL,
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),
        editUser: builder.mutation<unknown, { id: number; body: UserType }>({
            query: ({ id, body }) => ({
                url: putUserURl(id),
                method: "PUT",
                body,
            }),
            invalidatesTags: ["User"],
        }),
        uploadUserImage: builder.mutation<unknown, unknown>({
            query: (formData) => ({
                url: postUserImageURl,
                method: "POST",
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                body: formData,
            }),
            invalidatesTags: ["User"],
        }),
    }),
    overrideExisting: false,
});

export const { useGetUserQuery, useCreateUserMutation, useEditUserMutation, useUploadUserImageMutation } = userAPI;
