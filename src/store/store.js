import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./features/authSlice";
import cartReducer from "./features/cart";

const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
});
