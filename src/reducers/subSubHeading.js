export default (subSubHeading = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...subSubHeading, action.payload];
        case 'DELETE':
            return subSubHeading.filter((mainH) => mainH._id !== action.payload);
        case 'UPDATE':
            return subSubHeading.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        default:
            return subSubHeading;
    }
};
