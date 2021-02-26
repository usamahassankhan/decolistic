export default (subHeading = [], action) => {
    switch (action.type) {
        case 'SUB_FETCH_ALL':
            return action.payload;
        case 'SUB_CREATE':
            return [...subHeading, action.payload];
        case 'SUB_UPDATE':
            return subHeading.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        case 'SUB_DELETE':
            return subHeading.filter((mainH) => mainH._id !== action.payload);
        default:
            return subHeading;
    }
};
