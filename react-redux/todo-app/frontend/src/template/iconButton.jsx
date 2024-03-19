/* eslint-disable react/prop-types */
import React from 'react';
import If from '../template/If.jsx';

const IconButton = props => (
  <If test={!props.hide}>
    <button className={'btn btn-' + props.btnStyle} onClick={props.onClick}>
      <i className={'fa fa-' + props.icon}></i>
    </button>
  </If>
);

export default IconButton;
