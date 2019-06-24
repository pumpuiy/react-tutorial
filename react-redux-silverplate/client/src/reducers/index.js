import {combineReducers} from 'redux';
import printHelloWorldReducer from './printHelloWorldReducer';

const rootReducers = combineReducers({
        data : printHelloWorldReducer
    });

export default rootReducers;