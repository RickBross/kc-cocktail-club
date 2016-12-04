import React from 'react';
import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_Collage.scss';

let { Component, PropTypes } = React;

export default class Collage extends Component {
  render() {
    return (
      <div style={this.props.styles} className={classNames(styles.row, styles.collageBody, this.props.classNames)}>
        {this.props.children}
      </div>
    );
  }
}
