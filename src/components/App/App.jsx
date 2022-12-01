import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <Route exact path = '/'>
          <img src='images/pizza_photo.png' />
          <p>Pizza is great.</p>
        </Route>
        <Route exact path ='/customerInfo'>
          <CustomerInfoForm />
        </Route>
      </Router>
  
    </div>
  );
}

export default App;
