import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import commentReducer from './redux/reducers/CommentReducer';
import {Provider} from 'react-redux';

const store = createStore(commentReducer); //สร้างคลังข้อมูล

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

