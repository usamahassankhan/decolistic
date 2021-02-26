import * as api from '../api';
import Constants from '../Constants';
//action creators
export const getSubSubHeading = () => async (dispatch) => {
    try {
        console.log('in');
        const { data } = await api.fetchSubSubHeading();
        console.log(data);
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const createSubSubHeading = (subsubHeading) => async (dispatch) => {
    try {
        const { data } = await api.createSubSubHeading(subsubHeading);
        dispatch({ type: Constants.CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const updateSubSubHeading = (id, subsubHeading) => async (dispatch) => {
    try {
        const { data } = await api.updateSubSubHeading(id, subsubHeading);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
        S;
    }
};
export const deleteSubSubHeading = (id) => async (dispatch) => {
    try {
        await api.deleteSubSubHeading(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
};
