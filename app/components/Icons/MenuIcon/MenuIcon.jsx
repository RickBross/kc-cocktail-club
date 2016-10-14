import styles from './_MenuIcon.scss';
import React from 'react';
import classNames from 'classnames';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  render() {
    return (
      <span onClick={this.props.onclick} className={classNames(styles.menuIcon, this.props.classNames)}></span>
    );
  }
}
