import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';

import PizzaMenu from '../PizzaMenu/PizzaMenu';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <Route exact path = '/'>
          <PizzaMenu />
        </Route>
      </Router>
  
    </div>
  );
}

export default App;
