export type UserType = {
    id: number;
    name: string;
    email: string;
    photo: string;
    location: string;
    registeredDate: string;
    lastActiveDate: string;
    disabled: boolean;
};

export type UserFormType = {
    name: string;
    photo: string;
    email: string;
    location: string;
};

export type UserResponseType = {
    usersData: UserType[];
    totalCount: number;
};

export type OnSubmit = (user: UserType, id?: number) => void;
