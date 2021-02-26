export default (products = [], action) => {
    switch (action.type) {
        case 'PRODUCTS_FETCH_ALL':
            return action.payload;
        case 'PRODUCTS_CREATE':
            return [...products, action.payload];
        case 'PRODUCTS_UPDATE':
            return products.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        case 'PRODUCTS_DELETE':
            return products.filter((mainH) => mainH._id !== action.payload);
        default:
            return products;
    }
};
