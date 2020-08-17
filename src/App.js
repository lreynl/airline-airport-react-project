import React, { Component } from 'react';
import data from './data.js';
//import { getAirportByCode } from './data.js';
import { getRoutesByAirlineAirport } from './data.js';
import { formatValues, getAirlineList, getAirportList } from './data.js';
import Table from './components/Table.jsx';
import Select from './components/Select.jsx';
import './App.css';

class App extends Component {
  state = {
    selectedAirline: '',
    selectedAirport: '',
    page: 0,
  }

  handleAirlineChange = (e) => {
    let value;
    if (e.target.value === 'All Airlines') {
      value = '';
    } else {
      value = e.target.value;
    }
    this.setState({ selectedAirline: value, page: 0 });
  }

  handleAirportChange = (e) => {
    let value;
    if (e.target.value === 'All Airports') {
      value = '';
    } else {
      value = e.target.value;
    }
    this.setState({ selectedAirport: value, page: 0 });
  }

  updatePage = (page) => {
    this.setState({ page: page });
  }

  clear = () => {
    this.setState({
      selectedAirline: '',
      selectedAirport: '',
      page: 0,
    });
  }

  render() {
    const columns = [{ name: 'Airline', property: 'airline'},
                     { name: 'Source Airport', property: 'src'},
                     { name: 'Destination Airport', property: 'dest' }];

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          Show routes on
          <Select
            options={getAirlineList()}
            value={this.state.selectedAirline}
            allTitle="All Airlines"
            valueKey="id"
            titleKey="name"
            onChange={this.handleAirlineChange}
            onSelect=''
            selected={{ airline: this.state.selectedAirline,
                       airport: this.state.selectedAirport }}
          />
          flying in or out of
          <Select
            options={getAirportList()}
            value={this.state.selectedAirport}
            allTitle="All Airports"
            valueKey="id"
            titleKey="name"
            onChange={this.handleAirportChange}
            onSelect=''
            selected={{ airline: this.state.selectedAirline,
                       airport: this.state.selectedAirport }}
          />
          <button onClick={this.clear}>Clear Filters</button>
          <Table
            className="routes-table"
            columns={columns}
            rows={getRoutesByAirlineAirport(
              this.state.selectedAirline,
              this.state.selectedAirport,
            )}
            format={formatValues}
            perPage='25'
            page={this.state.page}
            updatePage={this.updatePage}
          />
        </section>
      </div>
    );
  }
}

export default App;
