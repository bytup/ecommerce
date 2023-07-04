import ProductCard from "@/components/home/ProductCard";

export default function Home() {
    return (
        <div className="">
            <div
                className=""
                style={{
                    width: "300px",
                    height: "100px",
                }}
            >
                <ProductCard
                    _id="1"
                    title="Product 1"
                    tags={["tag1", "tag2"]}
                    thumbnail="/vercel.svg"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
                    subcategory={{ title: "subcategory", _id: "1" }}
                    brand="brand"
                    price={100}
                />
            </div>
        </div>
    );
}
