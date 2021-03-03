export default (subHeading = [], action) => {
    switch (action.type) {
        case 'SUB_FETCH_ONLY_ALL':
            return action.payload;
        default:
            return subHeading;
    }
};
