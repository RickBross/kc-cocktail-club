import React from 'react';
import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_Frame.scss';

let { Component, PropTypes } = React;

let border = function(border) {
  if (border === false) {
    return styles.noBorder;
  }
}

export default class Frame extends Component {
  render() {
    return (
        <div style={{ zIndex: this.props.z, margin: this.props.margin,  position: this.props.position,  top: this.props.top,  bottom: this.props.bottom,  right: this.props.right,  left: this.props.left, width: this.props.width, height: this.props.height}} className={classNames(styles.frame, border(this.props.border), this.props.classNames)}>
          <div className={classNames(styles.frameBg)} style={{zIndex: this.props.z, width:'100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundImage: this.props.backgroundImage, backgroundPosition: this.props.backgroundPosition, backgroundSize: this.props.backgroundSize }} />
          <img src={this.props.accent} className={classNames(styles.accent)} style={this.props.accentStyle} />
        </div>
    );
  }
}
