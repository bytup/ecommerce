"use client";

import useQuery from "@/hooks/useQuery";
import React, { useState } from "react";
import Product from "./Product";

const Products = ({ title, apiRoute }) => {
    const { data, isLoading } = useQuery(apiRoute);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            <ProductList products={data} apiRoute={apiRoute} />
        </div>
    );
};

export default Products;

const ProductList = ({ products, apiRoute }) => {
    const [page, setPage] = useState(1);

    const loadMore = () => {
        setPage(page + 1);
    };

    const allPages = [];
    for (let i = 1; i <= page; i++) {
        allPages.push(
            <ProductPage
                products={products.slice((page - 1) * 10, page * 10)}
                apiRoute={apiRoute}
            />
        );
    }

    return (
        <>
            {allPages}
            <button onClick={loadMore}>Load More</button>
        </>
    );
};

const ProductPage = ({ products, apiRoute }) => {
    return (
        <>
            {products?.map((product, index) => (
                <div className="" key={index}>
                    <Product title={product} href={`/${apiRoute}/${product}`} />
                </div>
            ))}
        </>
    );
};
