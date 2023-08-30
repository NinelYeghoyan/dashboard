import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ThemeType } from "@features/theme/themeTypes";

type ThemeState = {
    themeType: ThemeType;
};

const initialState: ThemeState = {
    themeType: "dark",
};

const slice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.themeType = action.payload;
        },
    },
});

export const { setTheme } = slice.actions;

export default slice.reducer;
