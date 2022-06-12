import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import shopListApi from "./shopListApi";
import storesApi from "./storesApi";
import productsApi from "./productsApi";
import storeSlice from "./store";
import shoppinglistSlice from "./list";
import productsSlice from "./products";

const store = configureStore({
  reducer: combineReducers({
    [shopListApi.reducerPath]: shopListApi.reducer,
    [storesApi.reducerPath]: storesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [storeSlice.name]: storeSlice.reducer,
    [shoppinglistSlice.name]: shoppinglistSlice.reducer,
    [productsSlice.name]: productsSlice.reducer,
  }),
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    shopListApi.middleware,
    storesApi.middleware,
    productsApi.middleware,
  ],
});

//refetchOnFocus, refetchOnReconnect
setupListeners(store.dispatch);

export default store;
