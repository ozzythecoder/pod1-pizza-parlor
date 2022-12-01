import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './components/App/App';
import './index.css';

const orderPlaceholder = {
  "customer_name": "",
  "street_address": "",
  "city": "",
  "zip": "",
  "total": 0,
  "type": "",
  "pizzas": []
}

const pizzaList = (state = [], action) => {

  switch (action.type) {
    case 'SET_PIZZAS':
      return action.payload;
    default:
      break;
  }
  return state;
}

const currentOrder = (state = orderPlaceholder, action) => {
  
  switch (action.type) {
    case 'ADD_PIZZA':
      return {...state, pizzas: [ ...state.pizzas, action.payload ]}
    default:
      break;
  }

  return state;
}

const reduxStore = createStore(
  combineReducers(
    {currentOrder, pizzaList}
  ),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
  , document.getElementById('root'));
