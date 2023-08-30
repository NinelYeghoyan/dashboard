import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import { MAIN_URL } from "@config/index";

export const customFetchBase = fetchBaseQuery({
    baseUrl: MAIN_URL,
});
