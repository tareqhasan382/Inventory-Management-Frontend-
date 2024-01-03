//profile

import { baseApi } from "./baseApi";
// /auth/login
export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: () => ({
        url: "/api/v1/profile",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    login: build.mutation({
      query: (loginData) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const { useProfileQuery, useLoginMutation } = profileApi;
