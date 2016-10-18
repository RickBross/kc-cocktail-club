import styles from './_Menu.scss';
import rootStyles from '../../scss/app.scss';
import React from 'react';
import MenuItem from './MenuItem';
import MenuIcon from '../Icons/MenuIcon/MenuIcon';
import classNames from 'classnames';

let { Component, PropTypes } = React;

export default class MenuPanel extends Component {

  menuBtnClicked = (e) => {
    e.preventDefault();
    this.toggleMenu();
  }

  toggleMenu = () => {
    this.props.active = !this.props.active;
  }

  render() {
    return (
      <div className={classNames(styles.panel)}>
      </div>
    );
  }
}
