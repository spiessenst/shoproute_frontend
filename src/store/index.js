import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import shopListApi from "./shopListApi";
import storesApi from "./storesApi";
import productsApi from "./productsApi";
import departmentsApi from "./departmentsApi";
import storeSlice from "./store";
import shoppinglistSlice from "./list";
import loginApi from "./loginApi";
import userSlice from "./user";

const store = configureStore({
  reducer: combineReducers({
    [shopListApi.reducerPath]: shopListApi.reducer,
    [storesApi.reducerPath]: storesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [departmentsApi.reducerPath]: departmentsApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [storeSlice.name]: storeSlice.reducer,
    [shoppinglistSlice.name]: shoppinglistSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  }),
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    shopListApi.middleware,
    storesApi.middleware,
    productsApi.middleware,
    departmentsApi.middleware,
    loginApi.middleware,
  ],
});

//refetchOnFocus, refetchOnReconnect
setupListeners(store.dispatch);

export default store;
