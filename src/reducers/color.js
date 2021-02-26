export default (color = [], action) => {
    switch (action.type) {
        case 'COLOR_FETCH_ALL':
            return action.payload;
        case 'COLOR_CREATE':
            return [...color, action.payload];
        case 'COLOR_UPDATE':
            return color.map((mainH) =>
                mainH._id === action.payload._id ? action.payload : mainH
            );
        case 'COLOR_DELETE':
            return color.filter((mainH) => mainH._id !== action.payload);
        default:
            return color;
    }
};
