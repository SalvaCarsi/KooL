import React from 'react'
import { Link } from 'react-router'
import '../../../assets/styles/App.css';

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})