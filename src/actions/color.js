import * as api from '../api';
import Constants from '../Constants';
//action creators
export const getColor = () => async (dispatch) => {
    try {
        console.log('in');
        const { data } = await api.fetchColor();
        console.log(data);
        dispatch({ type: 'COLOR_FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const createColor = (color) => async (dispatch) => {
    try {
        const { data } = await api.createColor(color);
        dispatch({ type: 'COLOR_CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const updateColor = (id, color) => async (dispatch) => {
    console.log(id);
    try {
        const { data } = await api.updateColor(id, color);
        dispatch({ type: 'COLOR_UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteColor = (id) => async (dispatch) => {
    try {
        await api.deleteColor(id);
        dispatch({ type: 'COLOR_DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
};
