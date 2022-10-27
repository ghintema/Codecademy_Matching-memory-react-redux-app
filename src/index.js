import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './app/store.js';
// Add import statement below
import { Provider } from 'react-redux';


ReactDOM.render(
  // Implement Provider component with store below
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
require('react-dom');
window.React2 = require('react');
console.log('Test result')
console.log(window.React1 === window.React2);