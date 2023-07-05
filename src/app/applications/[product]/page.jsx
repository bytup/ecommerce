import ProductDetails from "@/components/ProductDetails";
import React from "react";

const ProductPage = ({ params: { product } }) => {
    return (
        <div className="container mx-auto">
            <div className="my-5 py-5">
                <ProductDetails
                    product={product}
                    apiRoute={`/applications/${product}`}
                />
            </div>
        </div>
    );
};

export default ProductPage;
