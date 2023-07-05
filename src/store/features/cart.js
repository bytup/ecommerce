import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    currentProduct: null,
    showMiniCart: false,
};

export const auth = createSlice({
    name: "cart",
    initialState,
    reducers: {
        hideMiniCart: (state) => {
            state.showMiniCart = false;
        },
        addToCart: (state, action) => {
            const item = action.payload;
            const product = state.products.find(
                (product) => product.InstanceId === item.InstanceId
            );
            if (product) {
                product.quantity += item.quantity;
            } else {
                state.products.push(item);
            }
            state.currentProduct = item;
            state.showMiniCart = true;
        },
        removeFromCart: (state, action) => {
            const item = action.payload;
            const finalProducts = state.products.filter(
                (product) => product.InstanceId !== item.InstanceId
            );
            state.products = finalProducts;
        },
        decreaseProductInCart: (state, action) => {
            const item = action.payload;
            const product = state.products.find(
                (product) => product.InstanceId === item.InstanceId
            );
            if (product) {
                product.quantity -= item.quantity;
            }
        },
        emptyCart: (state) => {
            state.products = [];
            state.currentProduct = null;
        },
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const {
    login,
    setToken,
    logout,
    setUser,
    addToCart,
    removeFromCart,
    emptyCart,
    decreaseProductInCart,
    hideMiniCart,
} = auth.actions;

export default auth.reducer;
