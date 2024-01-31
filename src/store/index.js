import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
 import authReducer from './authSlice';
// import userReducer from './user/userSlice';


const store = configureStore({
    reducer: {
        products: productsReducer,
         auth: authReducer,
        // user: userReducer,
  
    },
});

export default store;
