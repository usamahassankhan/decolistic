import * as api from '../api';
import Constants from '../Constants';
//action creators
export const getMainHeading = () => async (dispatch) => {
    try {
        console.log('in');
        const { data } = await api.fetchMainHeading();
        console.log(data);
        dispatch({ type: 'MAIN_FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const createMainHeading = (mainHeading) => async (dispatch) => {
    try {
        const { data } = await api.createMainHeading(mainHeading);
        dispatch({ type: 'MAIN_CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const updateMainHeading = (id, mainHeading) => async (dispatch) => {
    console.log(id);
    try {
        const { data } = await api.updateMainHeading(id, mainHeading);
        dispatch({ type: 'MAIN_UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteMainHeading = (id) => async (dispatch) => {
    try {
        await api.deleteMainHeading(id);
        dispatch({ type: 'MAIN_DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
};
