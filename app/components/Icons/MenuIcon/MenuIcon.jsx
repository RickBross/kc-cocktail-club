import styles from './_MenuIcon.scss';
import React from 'react';
import classNames from 'classnames';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static defaultProps = {
    onclick: [],
    menuActive: false,
  };

  static propTypes = {
    onclick: PropTypes.func.isRequired,
    menuActive: PropTypes.bool.isRequired,
  };

  rootClassNames(){
    let classes = [];

    classes = classNames(styles.menuIcon, {
      active: this.props.active
    });

    return classes;
  }

  render() {
    return (
      <span onClick={this.props.onclick} className={this.rootClassNames()}></span>
    );
  }
}
