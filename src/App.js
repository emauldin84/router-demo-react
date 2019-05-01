import React from 'react';
import './App.css';


import Home from './Home';
import About from './About';
import Koa from './Koa';
import Header from './Header'
import PageNotFound from './PageNotFound'

import { Link, Route, Switch, Redirect } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Header />
      <nav className="navbar">
        <Link to="/">Home </Link> <br />
        <Link to="/about">About </Link> <br />
        <Link to="/koa">Koa </Link> <br />
        <Link to="/nowhere">This goes nowhere</Link>
      </nav>
        {/* <Switch> shows the first matching route or the last route. */}
      <Switch>
        {/* Route will conditionally render a component based on the path in the address bar */}
        {/* <Home /> */}
        <Route exact path="/" component={Home} />
        {/* <About /> */}
        <Route path="/about" component={About} />
        {/* <Koa /> */}
        <Route path="/koa" component={Koa} />
        <Route component={PageNotFound} />

      </Switch>
    </div>
  );
}

export default App;
