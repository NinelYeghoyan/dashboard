export const routes = {
    home: {
        path: "/",
    },
    newUser: {
        path: "/new-user",
    },
    editUser: {
        path: "/edit-user/:id",
        getPath: (id: number) => `/edit-user/${id}`,
    },
};
