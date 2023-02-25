import { IUser } from './../../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITokens } from '../../models/models';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const authApi = createApi({
    reducerPath: 'auth/api',
    baseQuery: fetchBaseQuery({
      baseUrl: `${BASE_URL}/auth`
    }),
    refetchOnFocus: true,
    endpoints: build => ({
      createUser: build.mutation<IUser, Partial<IUser>>({
        query: (body) => ({
          url: `/users/`,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          method: 'POST',
          body
        })
      }),
      loginUser: build.mutation<ITokens, any>({
        query: (body) => ({
          url: '/jwt/create/',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          method: 'POST',
          body
        })
      })
       
    })
})

export const { 
  useLoginUserMutation, 
  useCreateUserMutation 
} = authApi;