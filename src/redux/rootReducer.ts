import {combineReducers} from 'redux';
import { reducer$application } from './reducers/application';
import { reducer$user } from './reducers/user';
const rootReducer = combineReducers({
    application:reducer$application,
    user:reducer$user
});

export default rootReducer;
