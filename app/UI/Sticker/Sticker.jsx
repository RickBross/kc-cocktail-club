import React from 'react';
import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_Sticker.scss';

let { Component, PropTypes } = React;

let border = function(border) {
  if (border === false) {
    return styles.noBorder;
  }
}

export default class Sticker extends Component {
  render() {
    return (
      <div style={this.props.styles} className={classNames(this.props.classNames)}>
        <img src={this.props.image} className={classNames(this.props.imageClasses)} style={this.props.imageStyle} />
      </div>
    );
  }
}
