import * as api from '../api';

export const getImage = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchImage(id);
        dispatch({ type: 'IMAGE_FETCH', payload: data });
    } catch (error) {
        console.log(error);
    }
};
