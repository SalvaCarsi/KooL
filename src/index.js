import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Logged from './components/Logged'
import About from './components/About'
import UrlParamsNavExample from './components/UrlParamsNavExample';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/logged" component={Logged}/>
      <Route path="/logged/:userName/:token" component={UrlParamsNavExample}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
