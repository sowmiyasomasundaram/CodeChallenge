import { combineReducers } from 'redux';
import { fetchDetailsReducer } from './fetchDetailsReducer';

const details = fetchDetailsReducer;

const detailsReducer = combineReducers({
    details
});

export default detailsReducer;
