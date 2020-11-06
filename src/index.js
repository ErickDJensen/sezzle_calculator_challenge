import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Bring in Redux Logger
import logger from 'redux-logger';
//Bring in Router
import { HashRouter as Router } from 'react-router-dom';
// Bring in Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//Reducer to store feedback state
const feedback = (state = {feeling: 0, understanding: 0, support: 0, comments: ''}, action) => {
    if (action.type === 'ADD_FEEDBACK') {
        return {...state, ...action.payload}
    }
    //Conditional statement to reset survey data for user
    if(action.type === 'RESET_FEEDBACK') {
        return {feeling: 0, understanding: 0, support: 0, comments: ''}
    }
    return state;
}

//Create store
const storeInstance = createStore(
    combineReducers({
        feedback
    }),
    applyMiddleware(logger) //Add our middleware logger
);

ReactDOM.render(<Provider store={storeInstance}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
