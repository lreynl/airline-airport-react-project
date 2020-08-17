import React, { Component } from 'react';

class Table extends Component {
  prevButton = (e) => {
    e.preventDefault();
    const rowsMin = 0;
    const perPage = +this.props.perPage;
    const currentPageStart = this.props.page;
    let updatedPageStart;
    if (currentPageStart - perPage < rowsMin) {
      return;
    } else {
      updatedPageStart = currentPageStart - perPage;
    }
    this.props.updatePage(updatedPageStart);
  };

  nextButton = (e) => {
    e.preventDefault();
    const rowsMax = this.props.rows.length;
    const perPage = +this.props.perPage;
    const currentPageStart = this.props.page;
    let updatedPageStart;
    if (rowsMax - currentPageStart <= perPage) {
      return;
    } else {
      updatedPageStart = currentPageStart + perPage;
    }
    this.props.updatePage(updatedPageStart);
  };

  prevDisabled = () => {
    return (this.props.page === 0 ? true : false);
  }

  nextDisabled = () => {
    return (this.props.page + (+this.props.perPage) === this.props.rows.length ? true : false);
  }

  render() {
    const start = this.props.page;
    const perPage = +this.props.perPage;
    const currentlyViewedRows = this.props.rows.slice(start, start + perPage);
    const rows = (
      currentlyViewedRows.map((row, index) => {
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
      <div>
        <table className={this.props.className}>
          <tbody>
            {[title, ...rows]}
          </tbody>
        </table>
        <p>Showing {start + 1}-{start + perPage} of {this.props.rows.length} routes.</p>
        <button onClick={this.prevButton} disabled={this.prevDisabled()}>previous</button>
        <button onClick={this.nextButton} disabled={this.nextDisabled()}>next</button>
      </div>
    );

  }
};

export default Table;
