/* global __DEVTOOLS__, __VERSION__ */
// @flow weak
import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';

const props = { store: 'someStore' };

ReactDOM.render(
  <App {...props}/>, document.getElementById('root')
);
