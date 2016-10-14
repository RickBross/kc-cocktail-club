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
    this.openMenu();
  }

  openMenu = () => {
    console.log('menu open');
  }

  render() {
    return (
      <div className={styles.menuWrapper}>
        <h1 className={classNames(styles.title, 'left')}>{this.props.title}</h1>
        <a href="#" className={classNames(styles.menuIconWrapper, rootStyles.center)} onClick={this.props.onclick}>
          <MenuIcon onclick={this.menuBtnClicked} />
        </a>
      </div>
    );
  }
}
