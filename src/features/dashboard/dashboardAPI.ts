import { api } from "@app/api";
import { deleteUserURl, getUsersURL, patchUserURl } from "@features/dashboard/dashboardEndpoints";
import { UserResponseType, UserType } from "@features/user/userTypes";

export const dashboardAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<UserResponseType, { page: number; limit: number; sort: string; order: string }>({
            query: ({ page, limit, sort, order }) => ({
                url: getUsersURL(page, limit, sort, order),
                method: "GET",
            }),
            transformResponse(response: UserResponseType["usersData"], meta) {
                const totalCount = Number(meta?.response?.headers.get("X-Total-Count"));

                return {
                    usersData: response,
                    totalCount,
                };
            },
            transformErrorResponse: (response: any) => response.data?.error,
            providesTags: ["User"],
        }),
        updateState: builder.mutation<UserType, { id: number; state: boolean }>({
            query: ({ id, state }) => ({
                url: patchUserURl(id),
                method: "PATCH",
                body: {
                    disabled: state,
                },
            }),
            invalidatesTags: ["User"],
        }),
        deleteUser: builder.mutation<unknown, { id: number }>({
            query: ({ id }) => ({
                url: deleteUserURl(id),
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),
    }),
    overrideExisting: false,
});

export const { useGetUsersQuery, useUpdateStateMutation, useDeleteUserMutation } = dashboardAPI;
