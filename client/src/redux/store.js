import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { cryptoApi } from "../services/cryptoAPI";
import { cryptoNewsApi } from "../services/CryptoNewsApi";

const store =  configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(cryptoApi.middleware).concat(cryptoNewsApi.middleware),
});

setupListeners(store.dispatch);
setupListeners(cryptoApi.middleware);
setupListeners(cryptoNewsApi.middleware);

export default store;