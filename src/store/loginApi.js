import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_thomass/eindwerk",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: ({ username, password }) => ({
        url: "/app_json_login",
        method: "POST",
        body: {
          username,
          password,
        },
      }),
    }),
  }),
});

export default loginApi;
export const { usePostLoginMutation } = loginApi;

// const loginApi = createApi({
//   reducerPath: "loginApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://wdev2.be/fs_thomass/eindwerk/api",
//     credentials: "include",
//   }),
//   endpoints: (builder) => ({
//     postLogin: builder.mutation({
//       query: ({ username, password }) => ({
//         url: "/login_check",
//         method: "POST",
//         body: {
//           username,
//           password,
//         },
//       }),
//     }),
//     getUserId: builder.query({
//       query: (email) => `/user/${email}`,
//     }),
//   }),
// });

// export default loginApi;
// export const { usePostLoginMutation, useGetUserIdQuery } = loginApi;
