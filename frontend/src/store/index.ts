import { userApi } from './auth/userApi';
import { githubApi } from './github/github.api';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { authApi } from './auth/auth.api';

export const store = configureStore({
    reducer: {
      [githubApi.reducerPath]: githubApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
      githubApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ])
})
export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)