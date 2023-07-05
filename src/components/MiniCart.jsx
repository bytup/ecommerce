"use client";

import { Popover, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LazyLoadingImage from "./LazyLoadingImage";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { removeFromCart } from "@/store/features/cart";
import useCart from "@/hooks/useCart";
import MiniCartModal from "./main/MiniCartModal";

const MiniCart = () => {
    const { products, _id, showMiniCart } = useSelector((state) => state?.cart);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useRouter();
    const dispatch = useDispatch();
    const { total } = useCart();
    const buttonRef = useRef(null);

    useEffect(() => {
        if (showMiniCart) {
            buttonRef.current?.click();
        }
    }, [showMiniCart]);

    useEffect(() => {
        if (true) {
            toast.success("Product removed from cart!");
        }
    }, [navigate]);

    // find subtotal from cart
    let subtotal = 0;
    // cart?.forEach((item) => {
    //     subtotal += item?.product?.price * item?.quantity;
    // });

    const getPrice = (cost) => {
        // trim the price to 2 decimal places
        return cost.toFixed(4);
    };

    const handleRemove = (product) => () => {
        dispatch(removeFromCart(product));
    };

    return <>{showMiniCart && <MiniCartModal isOpen={showMiniCart} />}</>;
};

export default MiniCart;
