import React from 'react';
import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_Pane.scss';

let { Component, PropTypes } = React;

let border = function(border) {
  if (border === false) {
    return styles.noBorder;
  }
}

export default class Pane extends Component {
  render() {
    return (
      <div style={this.props.styles} className={classNames(styles.pane, this.props.classNames)}>
      </div>
    );
  }
}
