import React, { Component } from 'react';

class Select extends Component {
  render() {
    const makeOptionList = (arr, defaultOption) => {
      const list = arr.map(elem => {
        return (
          <option>{elem}</option>
        );
      });
      list.unshift(<option>{defaultOption}</option>);
      return list;
    }

    const list = makeOptionList(this.props.options, this.props.allTitle);

    return (
      <div>
        <select onChange={this.props.onChange}>{list}</select>
      </div>
    );
  }
}

export default Select;
