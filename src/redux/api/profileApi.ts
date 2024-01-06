/* eslint-disable @typescript-eslint/no-explicit-any */
//profile

import { Inputs } from "../../components/EditProfile";
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
    //================================
    updateProfile: build.mutation<void, Pick<Inputs, any> & Partial<Inputs>>({
      query: ({ id, ...userData }) => ({
        url: `/api/v1/editProfile/${id}`,
        method: "PUT",
        body: userData,
      }),
    }),
    //====================
    updatePost: build.mutation<void, Pick<Inputs, "id"> & Partial<Inputs>>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    //====================
  }),
});

export const { useProfileQuery, useUpdateProfileMutation } = profileApi;
