import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:6969/',
        prepareHeaders: (headers, { getState }) => {},
    }),
    endpoints: () => ({}),
});
// TO-DO: add endpoints to authApi
