import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import Logged from './modules/Logged'
import About from './modules/About'
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/logged" component={Logged}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
