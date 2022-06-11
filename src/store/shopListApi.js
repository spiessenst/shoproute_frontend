import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shopListApi = createApi({
  reducerPath: "shopListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomass/eindwerk/api/lists",
  }),
  endpoints: (builder) => ({
    getAllLists: builder.query({
      query: () => "",
      providesTags: ["LISTALL"],
    }),
    getListforStore: builder.query({
      query: ({ shoppinglist_id, store_id }) =>
        `/${shoppinglist_id}/${store_id}`,
    }),
  }),
});

export default shopListApi;
export const { useGetAllListsQuery, useGetListforStoreQuery } = shopListApi;
