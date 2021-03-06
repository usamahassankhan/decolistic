import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// });

export const fetchImage = (id) => API.get(`/image/${id}`);

export const fetchMainHeading = () => API.get('/mainheading/getall');
export const createMainHeading = (newMainHeading) => API.post('/mainheading', newMainHeading);
export const updateMainHeading = (id, updatedMainHeading) =>
    API.patch(`/mainheading/${id}`, updatedMainHeading);
export const deleteMainHeading = (id) => API.delete(`/mainheading/${id}`);

//subheading
// export const fetchSubHeading = (skip) => API.get(`/subheading/getall?skip=${skip}`);
export const fetchSubHeading = () => API.get('/subheading/getall');
export const fetchSubHeadingHandler = (tit) => API.post('/subheading/gettitle', { title: tit });
//?page=${page}%limit=${limit}`);
export const fetchOnlySubHeading = () => API.get('/subheading/getonlyheading');
export const createSubHeading = (newSubHeading) => API.post('/subheading', newSubHeading);
export const updateSubHeading = (id, updatedSubHeading) =>
    API.patch(`/subheading/${id}`, updatedSubHeading);
export const deleteSubHeading = (id) => API.delete(`/subheading/${id}`);

export const fetchProducts = () => API.get('/product/getall');
export const createProducts = (newProducts) => API.post('/product', newProducts);
export const updateProducts = (id, updatedProducts) => API.patch(`/product/${id}`, updatedProducts);
export const deleteProducts = (id) => API.delete(`/product/${id}`);

// export const likePost = (id) => API.patch(`posts/${id}/likePost`);

export const fetchSubSubHeading = () => API.get('/subsubheading/getall');
export const createSubSubHeading = (newSubHeading) => API.post('/subsubheading', newSubHeading);
export const updateSubSubHeading = (id, updatedSubSubHeading) =>
    API.patch(`/subsubheading/${id}`, updatedSubSubHeading);
export const deleteSubSubHeading = (id) => API.delete(`/subsubheading/${id}`);

export const fetchColor = () => API.get('/color/getall');
export const createColor = (newColor) => API.post('/color', newColor);
export const updateColor = (id, updatedColor) => API.patch(`/color/${id}`, updatedColor);
export const deleteColor = (id) => API.delete(`/color/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
