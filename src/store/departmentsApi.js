import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const departmentsApi = createApi({
  reducerPath: "departmentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomass/eindwerk/api",
  }),
  endpoints: (builder) => ({
    getAllDepartments: builder.query({
      query: () => "/departments",
    }),
  }),
});

export default departmentsApi;
export const { useGetAllDepartmentsQuery } = departmentsApi;
