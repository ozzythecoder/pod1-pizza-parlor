import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './components/App/App';
import './index.css';

const orderPlaceholder = {
  "customer_name": "Donatello",
  "street_address": "20 W 34th St",
  "city": "New York",
  "zip": "10001",
  "total": "27.98",
  "type": "Pickup",
  "pizzas": [{
    "id": "1",
    "quantity": "1"
  },{
    "id": "2",
    "quantity": "1"
  }]
}

const currentOrder = (state = orderPlaceholder, action) => {


  return state;
}

const reduxStore = createStore(
  combineReducers(
    {}
  ),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
  , document.getElementById('root'));
