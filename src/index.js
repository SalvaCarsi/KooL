import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Logged from './components/Logged';
import About from './components/About';
import Home from './components/Home';
import UrlParamsNavExample from './components/UrlParamsNavExample';
import '../assets/styles/index.css';

/*
  Starting point for rendering the application
 */
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/logged" component={Logged}>
        <Route path="/logged/:userName/:token" component={UrlParamsNavExample}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
