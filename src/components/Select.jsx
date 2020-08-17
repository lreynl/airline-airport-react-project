import React, { Component } from 'react';
import { getRoutesByAirlineAirport } from '../data.js';

class Select extends Component {
  disableInvalidOption = (elem) => {
    if (this.props.allTitle.includes('Airline')) {
      const airport = this.props.selected.airport;
      return getRoutesByAirlineAirport(elem, airport).length === 0;
    } else {
      const airline = this.props.selected.airline;
      return getRoutesByAirlineAirport(airline, elem).length === 0;
    }
  }

  render() {
    const makeOptionList = (arr, defaultOption) => {
      const list = arr.map(elem => {
        return (
          <option disabled={this.disableInvalidOption(elem)}>{elem}</option>
        );
      });
      list.unshift(<option selected={this.props.value === ''}>{defaultOption}</option>);
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
