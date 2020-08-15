import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <dd>
      Hello?
        <span>{this.props.airline}</span>
        <span>{this.props.source}</span>
        <span>{this.props.dest}</span>
      </dd>
    );
  }
}

export default Title;
