import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({

    name: 'loginSlice',
    initialState: { 

        login: false,

    },
    reducers: {

        login: (state) => {
            
            state.login = true;

        },
        logout: (state) => {

            state.login = false;

        },
    },

});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
