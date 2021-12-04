import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';

import { paymentApi } from '../services/payment';


export default configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paymentApi.middleware),
});
