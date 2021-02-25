export const setCurrentMainHeading = (id) => (dispatch) => {
    dispatch({ type: 'CURRENTMAINHEADING', payload: id });
};
export const getCurrentMainHeading = () => (dispatch) => {
    dispatch({ type: 'GETCURRENTMAINHEADING' });
};
