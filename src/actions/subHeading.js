import * as api from '../api';
import Constants from '../Constants';
//action creators
export const getSubHeading = () => async (dispatch) => {
    try {
        console.log('in');
        const { data } = await api.fetchSubHeading();
        console.log(data);
        dispatch({ type: 'SUB_FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const createSubHeading = (subHeading) => async (dispatch) => {
    try {
        const { data } = await api.createSubHeading(subHeading);
        dispatch({ type: 'SUB_CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const updateSubHeading = (id, subHeading) => async (dispatch) => {
    try {
        const { data } = await api.updateSubHeading(id, subHeading);
        dispatch({ type: 'SUB_UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteSubHeading = (id) => async (dispatch) => {
    try {
        await api.deleteSubHeading(id);
        dispatch({ type: 'SUB_DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
};
