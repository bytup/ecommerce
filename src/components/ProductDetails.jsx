"use client";

import useCart from "@/hooks/useCart";
import useQuery from "@/hooks/useQuery";
import { addToCart, emptyCart } from "@/store/features/cart";
import React from "react";
import { useDispatch } from "react-redux";

const ProductDetails = ({ product, apiRoute }) => {
    const { data } = useQuery(apiRoute);
    const dispatch = useDispatch();
    const { total, count, productExists } = useCart();

    // This function will add the product to the cart
    const handleAddToCart = () => {
        const productData = data[0];
        dispatch(
            addToCart({
                ...productData,
                quantity: 1,
            })
        );
    };

    // Loader if the data is not ready
    if (!data) {
        return <div>Loading...</div>;
    }

    // Will check if the product is in the cart
    const isInCart = productExists(data[0]);
    return (
        <div>
            {count}
            {/* create two columsn */}
            {/* left column */}
            <div className=""></div>
            {/* right column */}
            {/* <button class="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-2 px-4 sm:py-2.5 sm:px-6 bg-green-900 dark:bg-green-300  shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                Add to cart
            </button> */}
            {isInCart ? "in cart" : "not in cart"}
            <button
                onClick={handleAddToCart}
                className="flex items-center border-2 border-green-500 hover:bg-green-500 hover:text-white  py-2 px-6  text-sm font-medium text-green-500 rounded-full"
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductDetails;
