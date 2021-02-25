export default (mainHeading = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...mainHeading, action.payload];

        default:
            return mainHeading;
    }
};
