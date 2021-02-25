export default (mainHeading = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...mainHeading, action.payload];
        case 'DELETE':
            return mainHeading.filter((mainH) => mainH._id !== action.payload);
        case 'UPDATE':
            return mainHeading.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        default:
            return mainHeading;
    }
};
