import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm';
import Admin from '../Admin/Admin';

import PizzaMenu from '../PizzaMenu/PizzaMenu';
import Header from '../Header/Header';

function App() {

  return (
    <div className='App'>
      <Router>
        <Route exact path = '/'>
          <Header
            text="Prime Pizza"
            showCart='true'/>
          <PizzaMenu />
        </Route>
        <Route exact path ="/customerInfo">
        <Header
            text="Prime Pizza"
            showCart='true'/>
          <CustomerInfoForm />
        </Route>
        <Route exact path = '/admin'>
        <Header
            text="Prime Pizza Orders"/>
          <Admin/>
        </Route>
      </Router>
  
    </div>
  );
}

export default App;
