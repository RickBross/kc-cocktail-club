import './favicon.ico';
import './index.html';
import 'babel-core/polyfill';
import 'normalize.css/normalize.css';
import styles from './scss/app.scss';

import React from 'react';
import App from './components/App/App';

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

React.render(
  <App/>,
  document.getElementById('app')
);
