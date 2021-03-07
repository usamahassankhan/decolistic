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
<<<<<<< HEAD
=======
import images from './image.js';
>>>>>>> dde48fb9781a82b44a7bd86da4337320fddb23ff
export default combineReducers({
    posts,
    auth,
    mainHeading,
    currentMainHeadingId,
    subHeading,
    subSubHeading,
    color,
    product,
<<<<<<< HEAD
    subHeadingOnly
=======
    subHeadingOnly,
    images
>>>>>>> dde48fb9781a82b44a7bd86da4337320fddb23ff
});
