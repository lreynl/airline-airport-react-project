import React, { Component } from 'react';
import data from './data.js';
//import { getAirportByCode } from './data.js';
//import { getAirlineById } from './data.js';
import { formatValues } from './data.js';
import Table from './components/Table.jsx';
import './App.css';

class App extends Component {
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
          <Table className="routes-table" columns={columns} rows={data.routes} format={formatValues} />
        </section>
      </div>
    );
  }
}

export default App;
