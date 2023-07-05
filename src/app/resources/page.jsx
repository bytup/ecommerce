import Products from "@/components/Products";
import React from "react";

const ResourcesPage = () => {
    return (
        <div className="container mx-auto">
            <Products title={"Resources"} apiRoute={"resources"} />
        </div>
    );
};

export default ResourcesPage;
