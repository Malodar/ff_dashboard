import { ITokens, IUser } from './../../models/models';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
    access: string | null,
    refresh: string | null,
    user: IUser | null,
    isAuthenticated: boolean | null
};

const initialState: IUserState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    user: null,
    isAuthenticated: null
};

export const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        login: (state, action: PayloadAction<ITokens>) => {
          localStorage.setItem('access', action.payload.access)
          localStorage.setItem('refresh', action.payload.refresh)
          state.access = action.payload.access;
          state.refresh = action.payload.refresh;
          state.isAuthenticated = true;
        },
        logout: () => initialState,
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
