import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomass/eindwerk/api",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["PRODUCTSALL"],
    }),
    postNewproduct: builder.mutation({
      query: ({ product_name, department_id }) => ({
        url: "/products",
        method: "POST",
        body: {
          product_name,
          department_id,
        },
      }),
      invalidatesTags: ["PRODUCTSALL"],
    }),
  }),
});

export default productsApi;
export const { useGetAllProductsQuery, usePostNewproductMutation } =
  productsApi;
