export default (subHeading = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...subHeading, action.payload];
        case 'DELETE':
            return subHeading.filter((mainH) => mainH._id !== action.payload);
        case 'UPDATE':
            return subHeading.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        default:
            return subHeading;
    }
};
