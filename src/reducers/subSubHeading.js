export default (subSubHeading = [], action) => {
    switch (action.type) {
        case 'SUBSUB_FETCH_ALL':
            return action.payload;
        case 'SUBSUB_CREATE':
            return [...subSubHeading, action.payload];
        case 'SUBSUB_UPDATE':
            return subSubHeading.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        case 'SUBSUB_DELETE':
            return subSubHeading.filter((mainH) => mainH._id !== action.payload);
        default:
            return subSubHeading;
    }
};
