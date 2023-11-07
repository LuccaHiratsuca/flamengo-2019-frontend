// TO-DO: routes from out Backend
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rentalApi = createApi({
    reducerPath: 'rentalApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://18.236.255.187:8080',
        prepareHeaders: (headers, { getState }) => {},
    }),
    endpoints: () => ({})
})
