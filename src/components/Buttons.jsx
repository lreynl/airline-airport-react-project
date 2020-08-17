import React, { Component } from 'react';

class Buttons extends Component {
  underPageLength = (rows) => {
    const perPage = this.props.perPage;
    const value = rows < perPage ? rows : perPage;
    return value;
  }

  render() {
    const start = this.props.start;
    return (
      <div>
        <p>Showing {start + 1}-{this.underPageLength(start + this.props.perPage)} of {this.props.rowsLen} routes.</p>
        <button onClick={this.props.prev} disabled={this.props.prevDisabled()}>previous</button>
        <button onClick={this.props.next} disabled={this.props.nextDisabled()}>next</button>
      </div>
    );
  }
};

export default Buttons;
