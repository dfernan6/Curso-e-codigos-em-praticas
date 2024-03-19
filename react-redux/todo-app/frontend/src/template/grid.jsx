/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class Grid extends Component {
  toCssClasses (numbers) {
    const cols = numbers ? numbers.split(' ') : [];
    let classes = '';

    if (cols[0]) classes += `col-xs-${cols[0]}`;
    if (cols[1]) classes += ` col-sm-${cols[1]}`;
    if (cols[2]) classes += ` col-md-${cols[2]}`;
    if (cols[3]) classes += ` col-lg-${cols[3]}`;

    return classes;
  }

  render () {
    const gridClasses = this.toCssClasses(this.props.cols || 12);

    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div className={gridClasses}>;
        // eslint-disable-next-line react/prop-types, react/prop-types, indent, indent
      {this.props.children}
      </div>
    );
  }
};
