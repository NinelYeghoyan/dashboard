import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    message: string;
}

const initialState: UserState = {
    message: "",
};

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
});

export const { updateMessage } = slice.actions;

export default slice.reducer;
