import { createApi } from "@reduxjs/toolkit/query/react";

import { customFetchBase } from "@app/customFetchBase";

export const api = createApi({
    reducerPath: "api",
    baseQuery: customFetchBase,
    tagTypes: ["User"],
    endpoints: () => ({}),
});
