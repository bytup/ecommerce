import ProductDetails from "@/components/ProductDetails";
import React from "react";

const ProductPage = ({ params: { product } }) => {
    return (
        <div className="container mx-auto">
            <div className="">
                <h1>{product}</h1>
                <ProductDetails
                    product={product}
                    apiRoute={`/resources/${product}`}
                />
            </div>
        </div>
    );
};

export default ProductPage;
