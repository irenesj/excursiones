import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({

    name: 'loginSlice',
    initialState: { 

        login: false,
        user: null,
        token: null

    },
    reducers: {

        // {payload: {userName, token}}
        login: (state, action) => {
            
            const {user, token} = action.payload;
            state.login = true;
            state.user = user;
            state.token = token;

        },
        logout: (state) => {

            state.login = false;
            state.userName = null;
            state.token = null;

        },
    },

});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
