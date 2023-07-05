"use client";

import useCart from "@/hooks/useCart";
import useQuery from "@/hooks/useQuery";
import { addToCart, emptyCart, hideMiniCart } from "@/store/features/cart";
import React from "react";
import { useDispatch } from "react-redux";
import LazyLoadingImage from "./LazyLoadingImage";

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
        setTimeout(() => {
            dispatch(hideMiniCart());
        }, 3000);
    };

    // Loader if the data is not ready
    if (!data) {
        return <div>Loading...</div>;
    }

    // Will check if the product is in the cart
    const isInCart = productExists(data[0]);
    return (
        <div>
            <Card handleAddToCart={handleAddToCart} product={data[0]} />
        </div>
    );
};

export default ProductDetails;

const Card = ({ handleAddToCart, product }) => {
    return (
        <li
            class="glide__slide"
            style={{
                width: "405.333px",
                marginLeft: "16px",
                marginRight: "16px",
                listStyle: "none",
            }}
        >
            <div class="CollectionCard2 group relative undefined">
                <div class="relative flex flex-col">
                    <div class="aspect-w-8 aspect-h-4 bg-neutral-100 rounded-2xl overflow-hidden">
                        <LazyLoadingImage src={"/placeholder.svg"} />
                    </div>
                    <div class="grid grid-cols-3 gap-2.5 mt-2.5 mb-4">
                        <div class="w-full h-24 sm:h-28">
                            <LazyLoadingImage
                                src={"/placeholder.svg"}
                                width="187"
                                height="158"
                            />
                        </div>
                        <div class="w-full h-24 sm:h-28">
                            <LazyLoadingImage
                                src={"/placeholder.svg"}
                                width="187"
                                height="158"
                            />
                        </div>
                        <div class="w-full h-24 sm:h-28">
                            <LazyLoadingImage
                                src={"/placeholder.svg"}
                                width="187"
                                height="158"
                            />
                        </div>
                    </div>
                </div>
                <div class="relative mt-5 flex justify-between">
                    <div class="flex-1">
                        <h2 class="font-semibold text-lg sm:text-xl ">
                            {product.MeterCategory}
                        </h2>
                        <div class="mt-3 flex items-center text-slate-500 dark:text-slate-400">
                            <span class="text-sm ">
                                <span class="line-clamp-1">
                                    Black and Orange
                                </span>
                            </span>
                            <span class="h-5 mx-1 sm:mx-2 border-l border-slate-200 dark:border-slate-700"></span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                class="w-4 h-4 text-orange-400"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="text-sm ml-1 ">
                                <span class="line-clamp-1">
                                    4.9 (269 reviews)
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="mt-0.5 sm:mt-1 ml-4">
                        <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                            <span class="text-green-500 !leading-none">
                                ${Number(product.Cost).toFixed(4)}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse mt-4">
                    <button
                        onClick={handleAddToCart}
                        className="flex items-center border-2 border-green-500 hover:bg-green-500 hover:text-white  py-2 px-6  text-sm font-medium text-green-500 rounded-full"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </li>
    );
};
