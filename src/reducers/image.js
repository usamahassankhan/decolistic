export default (images = [], action) => {
    switch (action.type) {
        case 'IMAGE_FETCH':
            return [...images, action.payload];

        default:
            return images;
    }
};
