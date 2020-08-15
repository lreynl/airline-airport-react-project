import React, { Component } from 'react';
import Title from './Title.jsx';
class Table extends Component {
  render() {
    //map each column element onto a title plus an
    //array of table elements, each passed to the
    //correct function according to the prop.
    //console.log(this.props.format);

    const rows = (
      this.props.rows.map((row, index) => {
        return (
          <tr>
            {this.props.columns.map(columnElem => {
              const prop = columnElem.property;
              return (
                <td>{this.props.format(prop, row[prop])}</td>
              );
            })}
          </tr>
        );
      })

    );

    const title = (
      <tr>
        {this.props.columns.map(item => {
          return (
            <th>{item.name}</th>
          );
        })}
      </tr>
    );
    return (
        <table>
          {[title, ...rows]}
        </table>
    );

  }
};

export default Table;
