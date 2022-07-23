import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../slicers/filterSlice';
import loginSlice from '../slicers/loginSlice';

// This the store of the web app. In here we saved the login and the filters information
export default configureStore({

  reducer: {

    loginReducer: loginSlice,
    filterReducer: filterSlice

  },

});
