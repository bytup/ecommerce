import Link from "next/link";
import React from "react";

const Product = ({ title, href }) => {
    return (
        <div className="cursor-pointer">
            <Link href={href}>{title}</Link>
        </div>
    );
};

export default Product;
