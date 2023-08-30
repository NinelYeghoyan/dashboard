import { combineReducers } from "@reduxjs/toolkit";

import { api } from "@app/api";
import themeReducer from "@features/theme/themeSlice";
import userReducer from "@features/user/userSlice";

export const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
