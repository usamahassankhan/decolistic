export default (subHeadingOnly = [], action) => {
    switch (action.type) {
        case 'SUB_FETCH_ONLY_ALL':
            return action.payload;
        default:
            return subHeadingOnly;
    }
};
