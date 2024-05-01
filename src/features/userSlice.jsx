import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : "user",
    initialState : {
        user : null,
    },
    reducers : {
        login : (state,action) => {
            state.user = action.payload.name;
        },
        home : (state) => {
            state.user = "";
        },
    },
});

export const { login, home } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;