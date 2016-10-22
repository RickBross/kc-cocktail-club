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
      <div className={classNames(styles.bar)} onClick={this.props.onclick}>
        <div className={classNames(styles.wrapper)}>
          <div className={classNames(styles.titleWrapper)}>
            <span className={classNames(styles.title)}>{this.props.title}</span>
          </div>
          <span className={classNames(styles.menuIconWrapper)}>
            <MenuIcon
              tone={this.props.tone}
              active={this.props.active}
              onclick={this.menuBtnClicked.bind(this)} />
          </span>
        </div>
      </div>
    );
  }
}
