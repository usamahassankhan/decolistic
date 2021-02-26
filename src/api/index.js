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

//subheading
export const fetchSubHeading = () => API.get('/subheading/getall');
export const createSubHeading = (newSubHeading) => API.post('/subheading', newSubHeading);
export const updateSubHeading = (id, updatedSubHeading) =>
    API.patch(`/subheading/${id}`, updatedSubHeading);
export const deleteSubHeading = (id) => API.delete(`/subheading/${id}`);
// export const likePost = (id) => API.patch(`posts/${id}/likePost`);

export const fetchSubSubHeading = () => API.get('/subsubheading/getall');
export const createSubSubHeading = (newSubHeading) => API.post('/subsubheading', newSubHeading);
export const updateSubSubHeading = (id, updatedSubSubHeading) =>
    API.patch(`/subsubheading/${id}`, updatedSubSubHeading);
export const deleteSubSubHeading = (id) => API.delete(`/subsubheading/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
