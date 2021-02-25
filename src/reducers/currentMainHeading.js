export default (currentMainHeadingId = [], action) => {
    switch (action.type) {
        case 'SETCURRENTMAINHEADING':
            return (currentMainHeadingId = action.payload);
        case 'GETCURRENTMAINHEADING':
            return currentMainHeadingId;

        default:
            return currentMainHeadingId;
    }
};
