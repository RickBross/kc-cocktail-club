import React from 'react';
import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_Banner.scss';

let { Component, PropTypes } = React;

export default class Banner extends Component {
  render() {
    return (
        <div style={{width: '100%', maxWidth: this.props.width, overflow: this.props.overflow}} className={classNames(styles.banner, this.props.classNames)}>
          <div
            style={{
              zIndex: this.props.z,
              width: '100%',
              maxWidth: this.props.width,
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              backgroundImage: this.props.backgroundImage,
              backgroundPosition: this.props.backgroundPosition,
              backgroundSize: this.props.backgroundSize }} />
            <img src={this.props.accent} className={classNames(styles.accent, this.props.accentStyle, this.props.accentClassNames)} />
        </div>
    );
  }
}
