import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MAIN_URL = "http://localhost:5000";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: MAIN_URL,
    // prepareHeaders: (headers, { getState }) => {
    //   const user = getState()?.user?.user;
    //   const token = user?.token;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: "POST",
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/users`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response,
      transformErrorResponse: (response, meta, arg) => response.data.error,
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
    }),
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
    }),
    updateTask: builder.mutation({
      query: (data) => {
        const { id, ...rest } = data;
        return {
          url: `/tasks/${id}`,
          method: "PATCH",
          body: rest,
        };
      },
    }),
    updateCategory: builder.mutation({
      query: (data) => {
        const { id, ...rest } = data;
        return {
          url: `/categories/${id}`,
          method: "PATCH",
          body: rest,
        };
      },
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
