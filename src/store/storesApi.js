import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const storesApi = createApi({
  reducerPath: "storesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomass/eindwerk/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllStores: builder.query({
      query: () => "/stores",
    }),
  }),
});

export default storesApi;
export const { useGetAllStoresQuery } = storesApi;
