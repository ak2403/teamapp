import { combineReducers, createStore } from 'redux';
import AuthReducer from './authReducer';

const AppReducers = combineReducers({
    authUser: AuthReducer
});

const configure = () => {
    return createStore(AppReducers);
}

export default configure;