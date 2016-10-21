import React from 'react';
import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_Frame.scss';

let { Component, PropTypes } = React;

export default class Frame extends Component {
  render() {
    return (
        <div style={{width: this.props.width, height: this.props.height, backgroundImage: this.props.backgroundImage, backgroundPosition: this.props.backgroundPosition, backgroundSize: this.props.backgroundSize }} className={classNames(styles.frame, this.props.classNames)}>
        </div>
    );
  }
}
