"use client";

import useQuery from "@/hooks/useQuery";
import React from "react";
import Product from "./Product";

const Products = ({ title, apiRoute }) => {
    const { data } = useQuery(apiRoute);
    return (
        <div className="grid grid-cols-4 gap-4">
            {data?.map((product, index) => (
                <div className="" key={index}>
                    <Product title={product} href={`/${apiRoute}/${product}`} />
                </div>
            ))}
        </div>
    );
};

export default Products;
