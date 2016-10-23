import React from 'react';
import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_Drink.scss';

let { Component, PropTypes } = React;

export default class Banner extends Component {
  render() {
    return (
        <div className={classNames(styles.drink, this.props.classNames)}>
          <div className={classNames(styles.frameBg)} style={{ zIndex: this.props.z, width:'100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundImage: this.props.backgroundImage, backgroundRepeat: this.props.backgroundRepeat, backgroundPosition: this.props.backgroundPosition, backgroundSize: this.props.backgroundSize }} />
          <div className={classNames(styles.accent)} style={this.props.accentStyle} ></div>
        </div>
    );
  }
}
