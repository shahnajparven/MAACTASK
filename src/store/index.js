import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './user/usersSlice';


const store = configureStore({
    reducer: {
        user: usersSlice,
        
  
    },
});

export default store;
