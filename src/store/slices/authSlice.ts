import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser.ts";

interface IAuthSlice {
    isAuth: boolean;
    isAuthInPending: boolean;
    user: IUser | null;
}

const initialState: IAuthSlice = {
    isAuth: false,
    isAuthInPending: true,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (
            state,
            action: PayloadAction<{ isAuth: boolean; user: IUser | null }>,
        ) => {
            state.isAuth = action.payload.isAuth;
            state.user = action.payload.user;
        },
        setIsAuthInPending: (state, action: PayloadAction<boolean>) => {
            state.isAuthInPending = action.payload;
        },
    },
});

export const { setAuth, setIsAuthInPending } = authSlice.actions;
export default authSlice.reducer;
