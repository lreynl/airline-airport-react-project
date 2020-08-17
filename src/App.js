import React, { Component } from 'react';
import data from './data.js';
//import { getAirportByCode } from './data.js';
import { getRoutesByAirlineName } from './data.js';
import { formatValues, getAirlineList } from './data.js';
import Table from './components/Table.jsx';
import Select from './components/Select.jsx';
import './App.css';

class App extends Component {
  state = {
    selectedAirline: '',
    page: 0,
  }

  handleChange = (e) => {
    console.log(e.target.value);
    let value;
    if (e.target.value === 'All Airlines') {
      value = '';
    } else {
      value = e.target.value;
    }
    this.setState({ selectedAirline: value, page: 0 });
  }

  updatePage = (page) => {
    this.setState({ page: page });
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
            value=''
            allTitle="All Airlines"
            valueKey="id"
            titleKey="name"
            onChange={this.handleChange}
            onSelect=''
          />
          <Table
            className="routes-table"
            columns={columns}
            rows={getRoutesByAirlineName(this.state.selectedAirline)}
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
