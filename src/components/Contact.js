import React from 'react';

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const token = event.target.elements[1].value;
    const path = `/logged/${userName}/${token}`;
    this.context.router.push(path);
  },

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Contact Us!</h3>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="userName"/> / {' '}
            <input type="text" placeholder="repo"/> {' '}
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
    );
  }
})