import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import shopListApi from "./shopListApi";
import storesApi from "./storesApi";
import storeSlice from "./store";
import shoppinglistSlice from "./list";

const store = configureStore({
  reducer: combineReducers({
    [shopListApi.reducerPath]: shopListApi.reducer,
    [storesApi.reducerPath]: storesApi.reducer,
    [storeSlice.name]: storeSlice.reducer,
    [shoppinglistSlice.name]: shoppinglistSlice.reducer,
  }),
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    shopListApi.middleware,
    storesApi.middleware,
  ],
});

//refetchOnFocus, refetchOnReconnect
setupListeners(store.dispatch);

export default store;