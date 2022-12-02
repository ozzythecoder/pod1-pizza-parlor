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
      return {...state,
        pizzas: [ ...state.pizzas,
          { id: action.payload.id,
            quantity: action.payload.quantity }
          ],
        total: +state.total + +action.payload.price}
    case 'REMOVE_PIZZA':
      console.log('in remove_pizza');
      return {...state,
        pizzas: [ ...state.pizzas.filter(p => p.id != action.payload.id) ],
        total: +state.total - +action.payload.price}
    case 'ADD_CUSTOMER':
      return {...state, 
        customer_name: action.payload.customer_name, 
        street_address: action.payload.street_address,
        city: action.payload.city,
        zip: action.payload.zip,
        type: action.payload.type
      }
    case 'CLEAR_CART':
      return orderPlaceholder;
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
