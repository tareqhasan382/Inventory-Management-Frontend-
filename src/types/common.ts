/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IUserInfo {
  userId: string;
  email: string;
  name: string;
  role: string;
}

export interface IAdmin {
  id?: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IUser {
  id?: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
