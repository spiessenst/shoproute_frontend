import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shopListApi = createApi({
  reducerPath: "shopListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomass/eindwerk/api",
  }),
  endpoints: (builder) => ({
    getAllLists: builder.query({
      query: () => "/lists",
    }),
    getListforStore: builder.query({
      query: ({ shoppinglist_id, store_id }) =>
        `/lists/${shoppinglist_id}/${store_id}`,
      providesTags: ["LISTALL"],
    }),
    patchQty: builder.mutation({
      query: ({ product_id, shoppinglist_id, qty }) => ({
        url: "/lists",
        method: "PATCH",
        body: {
          product_id,
          shoppinglist_id,
          qty,
        },
      }),
      invalidatesTags: ["LISTALL"],
    }),
    patchChecked: builder.mutation({
      query: ({ product_id, shoppinglist_id, checked }) => ({
        url: "/lists",
        method: "PATCH",
        body: {
          product_id,
          shoppinglist_id,
          checked,
        },
      }),
      invalidatesTags: ["LISTALL"],
    }),
    patchDelete: builder.mutation({
      query: ({ product_id, shoppinglist_id }) => ({
        url: "/lists",
        method: "DELETE",
        body: {
          product_id,
          shoppinglist_id,
        },
      }),
      invalidatesTags: ["LISTALL"],
    }),
    postproductOnList: builder.mutation({
      query: ({ product_id, shoppinglist_id }) => ({
        url: "/lists",
        method: "POST",
        body: {
          product_id,
          shoppinglist_id,
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
  usePatchCheckedMutation,
  usePatchDeleteMutation,
  usePostproductOnListMutation,
} = shopListApi;
