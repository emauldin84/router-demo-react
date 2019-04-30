import React from 'react';
import './App.css';


import Home from './Home';
import About from './About';
import Koa from './Koa';

import { Link, Route, } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/koa">Koa </Link>
      
      {/* <Home /> */}
      <Route exact path="/" component={Home} />
      {/* <About /> */}
      <Route path="/about" component={About} />
      {/* <Koa /> */}
      <Route path="/koa" component={Koa} />

    </div>
  );
}

export default App;
