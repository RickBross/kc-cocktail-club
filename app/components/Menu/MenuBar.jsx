import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

export default class MenuBar extends Component {

  render() {
    return (
      <div className={styles.menuWrapper}>
        <h1 className={styles.title}>{this.props.title}</h1>
      </div>
    );
  }
}
