import Products from "@/components/Products";
import React from "react";

const ApplicationsPage = () => {
    return (
        <div className="container mx-auto">
            <Products title={"Applications"} apiRoute={"applications"} />
        </div>
    );
};

export default ApplicationsPage;
