import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ItemTest {
    id: number;
    title: string;
}

export const exampleApi = createApi({
    reducerPath: 'exampleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/',
        prepareHeaders: (header) => {
            return header;
        },
    }),
    tagTypes: ['List'],
    refetchOnMountOrArgChange: true,
    endpoints: (build) => ({
        getList: build.query<ItemTest[], void>({
            query: () => 'lists',
            providesTags: ['List'],
        }),
        addItem: build.mutation<void, ItemTest>({
            query: (para: ItemTest) => ({
                url: 'lists',
                method: 'post',
                body: para,
            }),
            invalidatesTags: ['List'],
        }),
    }),
});

export const { useAddItemMutation, useGetListQuery } = exampleApi;
