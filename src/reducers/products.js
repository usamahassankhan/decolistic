export default (products = [], action) => {
    switch (action.type) {
        case 'PRODUCT_FETCH_ALL':
            return action.payload;
        case 'PRODUCT_CREATE':
            return [...products, action.payload];
        case 'PRODUCT_UPDATE':
            return products.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        case 'PRODUCT_DELETE':
            return products.filter((mainH) => mainH._id !== action.payload);
        default:
            return products;
    }
};
