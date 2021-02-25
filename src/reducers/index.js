import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import mainHeading from './mainHeading';
import currentMainHeadingId from './currentMainHeading';
export default combineReducers({
    posts,
    auth,
    mainHeading,
    currentMainHeadingId
});
