import styles from './_MenuIcon.scss';
import React from 'react';
import classNames from 'classnames';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {



  static propTypes = {
    onclick: PropTypes.func.isRequired
  };

  render() {
    return (
      <span className={classNames(styles.menuIcon, this.props.classNames)}></span>
    );
  }
}
