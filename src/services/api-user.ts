import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://54.71.150.144:8082',
        prepareHeaders: (headers, { getState }) => {},
    }),
    endpoints: () => ({}),
});
