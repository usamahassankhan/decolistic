import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// });
export const fetchMainHeading = () => API.get('/mainheading/getall');
export const createMainHeading = (newMainHeading) => API.post('/mainheading', newMainHeading);
export const updateMainHeading = (id, updatedMainHeading) =>
    API.patch(`/mainheading/${id}`, updatedMainHeading);
export const deleteMainHeading = (id) => API.delete(`/mainheading/${id}`);

// export const likePost = (id) => API.patch(`posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
