export const getUsersURL = (page: number, limit: number, sort: string, order: string) =>
    `/users?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
export const patchUserURl = (id: number) => `/users/${id}`;
export const deleteUserURl = (id: number) => `/users/${id}`;
