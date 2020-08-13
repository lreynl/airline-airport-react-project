import React, { Component } from 'react';
import routes from './data.js';
import './App.css';

class DataContainer extends Component {
  state = {
    data: routes,
  }

  render() {
    const data = this.state.data.routes.map(elem => {
      return <Data stuff={elem} />
    });

    return (
      <dl>
        {data}
      </dl>
    );
  }
}

class Data extends Component {
  render() {
    return (
      <dd>
        <span>{this.props.stuff.airline}</span>
        <span>{this.props.stuff.src}</span>
        <span>{this.props.stuff.dest}</span>
      </dd>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Airline Routes</h1>
        </header>
        <section>
          <DataContainer />
        </section>
      </div>
    );
  }
}

export default App;
