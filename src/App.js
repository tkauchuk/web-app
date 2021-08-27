import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import ProductsList from './components/ProductsList';
import ProductPage from './components/ProductPage';
import Footer from './components/Footer';

import './sass/main.scss';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <ProductsList />} />
          <Route path="/add-product" exact component={() => <ProductPage />} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
