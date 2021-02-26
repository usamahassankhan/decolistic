import * as api from '../api';
import Constants from '../Constants';
//action creators
export const getSubSubHeading = () => async (dispatch) => {
    try {
        console.log('in');
        const { data } = await api.fetchSubSubHeading();
        console.log(data);
        dispatch({ type: 'SUBSUB_FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const createSubSubHeading = (subSubHeading) => async (dispatch) => {
    try {
        const { data } = await api.createSubSubHeading(subSubHeading);
        dispatch({ type: 'SUBSUB_CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const updateSubSubHeading = (id, subSubHeading) => async (dispatch) => {
    try {
        const { data } = await api.updateSubSubHeading(id, subSubHeading);
        dispatch({ type: 'SUBSUB_UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteSubSubHeading = (id) => async (dispatch) => {
    try {
        await api.deleteSubSubHeading(id);
        dispatch({ type: 'SUBSUB_DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
};
