import styles from './_Menu.scss';
import rootStyles from '../../scss/app.scss';
import React from 'react';
import MenuItem from './MenuItem';
import MenuIcon from '../Icons/MenuIcon/MenuIcon';
import classNames from 'classnames';

let { Component, PropTypes } = React;

export default class MenuBar extends Component {

  menuBtnClicked = (e) => {
    e.preventDefault();
    this.toggleMenu();
  }

  toggleMenu = () => {
    this.props.active = !this.props.active
  }

  render() {
    return (
      <div className={classNames(styles.container)}>
        <div className={classNames(styles.titleWrapper)}>
          <h1 className={classNames(styles.title)}>{this.props.title}</h1>
        </div>
        <span className={classNames(styles.menuIconWrapper, rootStyles.center)}>
          <MenuIcon active={this.props.active} classNames={'Rick'} onclick={this.menuBtnClicked.bind(this)} />
        </span>
      </div>
    );
  }
}
