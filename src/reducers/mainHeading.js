export default (mainHeading = [], action) => {
    switch (action.type) {
        case 'MAIN_FETCH_ALL':
            return action.payload;
        case 'MAIN_CREATE':
            return [...mainHeading, action.payload];
        case 'MAIN_DELETE':
            return mainHeading.filter((mainH) => mainH._id !== action.payload);
        case 'MAIN_UPDATE':
            return mainHeading.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        default:
            return mainHeading;
    }
};
