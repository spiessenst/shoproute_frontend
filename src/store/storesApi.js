import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const storesApi = createApi({
  reducerPath: "storesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomass/eindwerk/api/stores",
  }),
  endpoints: (builder) => ({
    getAllStores: builder.query({
      query: () => "",
    }),
  }),
});

export default storesApi;
export const { useGetAllStoresQuery } = storesApi;
