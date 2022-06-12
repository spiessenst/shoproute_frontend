import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shopListApi = createApi({
  reducerPath: "shopListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomass/eindwerk/api/lists",
  }),
  endpoints: (builder) => ({
    getAllLists: builder.query({
      query: () => "",
    }),
    getListforStore: builder.query({
      query: ({ shoppinglist_id, store_id }) =>
        `/${shoppinglist_id}/${store_id}`,
      providesTags: ["LISTALL"],
    }),
    patchQty: builder.mutation({
      query: ({ product_id, shoppinglist_id, qty }) => ({
        url: "",
        method: "PATCH",
        body: {
          product_id,
          shoppinglist_id,
          qty,
        },
      }),
      invalidatesTags: ["LISTALL"],
    }),
  }),
});

export default shopListApi;
export const {
  useGetAllListsQuery,
  useGetListforStoreQuery,
  usePatchQtyMutation,
} = shopListApi;
