import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
        <div>You are logged in!
          <ul>
            <li><NavLink to="/logged/reactjs/react-router">React Router</NavLink></li>
            <li><NavLink to="/logged/facebook/react">React</NavLink></li>
          </ul>
          {this.props.children}
        </div>
      )
  }
})