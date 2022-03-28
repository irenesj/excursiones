import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../slicers/loginSlice';

export default configureStore({

  reducer: {

    loginReducer: loginSlice,

  },
  
});