import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import mainHeading from './mainHeading';
import currentMainHeadingId from './currentMainHeading';
import subHeading from './subHeading';
import products from './products';
export default combineReducers({
    posts,
    auth,
    mainHeading,
    currentMainHeadingId,
    subHeading,
    products
});
