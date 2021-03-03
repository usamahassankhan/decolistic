import * as api from '../api';
import Constants from '../Constants';
//action creators
export const getProducts = () => async (dispatch) => {
    try {
        console.log('in');
        const { data } = await api.fetchProducts();
        console.log(data);
        dispatch({ type: 'PRODUCT_FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const createProducts = (products) => async (dispatch) => {
    try {
        const { data } = await api.createProducts(products);
        dispatch({ type: 'PRODUCT_CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const updateProducts = (id, products) => async (dispatch) => {
    try {
        const { data } = await api.updateProducts(id, products);
        dispatch({ type: 'PRODUCT_UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
};
export const deleteProducts = (id) => async (dispatch) => {
    try {
        await api.deleteProducts(id);
        dispatch({ type: 'PRODUCT_DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
};
