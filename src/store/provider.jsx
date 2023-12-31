"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
    );
};

export default ReduxProvider;
