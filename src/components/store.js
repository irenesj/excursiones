import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../slicers/filterSlice';
import loginSlice from '../slicers/loginSlice';


export default configureStore({

  reducer: {

    loginReducer: loginSlice,
    filterReducer: filterSlice

  },

});