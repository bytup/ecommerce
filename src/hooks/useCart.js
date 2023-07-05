const { useSelector } = require("react-redux");

const useCart = () => {
    const { products, currentProduct } = useSelector((state) => state.cart);

    const count = products.length;

    const total = products.reduce((acc, product) => {
        return acc + product.quantity * product.Cost;
    }, 0);

    const subTotal = (product) => {
        const productItem = products.find(
            (item) => item.InstanceId === product.InstanceId
        );
        return productItem.quantity * productItem.Cost;
    };

    const productExists = (product) => {
        return products.some((item) => item.InstanceId === product.InstanceId);
    };

    return {
        count,
        total,
        subTotal,
        currentProduct,
        productExists,
    };
};

export default useCart;
