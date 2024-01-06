import { baseApi } from "./api/baseApi";
//import { profileApi } from "./api/profileApi";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  //profile: profileApi,
};
