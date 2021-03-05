import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import mainHeading from './mainHeading';
import currentMainHeadingId from './currentMainHeading';
import subHeading from './subHeading';
import subSubHeading from './subSubHeading';
import color from './color';
import product from './products';
import subHeadingOnly from './subHeadingOnly';
import images from './image.js';
export default combineReducers({
    posts,
    auth,
    mainHeading,
    currentMainHeadingId,
    subHeading,
    subSubHeading,
    color,
    product,
    subHeadingOnly,
    images
});
