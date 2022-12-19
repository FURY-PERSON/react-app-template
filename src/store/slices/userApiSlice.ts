import { URL } from '@api/index';
import UserController from '@controllers/userController';
import { IGetUsersRequest, IGetUsersResponse } from '@models/userModel';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<IGetUsersResponse, IGetUsersRequest>({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        try {
          const response = await UserController.getUsers(arg);
          return { data: response };
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      }
    })
  })
});

export const { useGetUsersQuery } = userApi;
