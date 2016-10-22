import styles from './_Menu.scss';
import rootStyles from '../../scss/app.scss';
import React from 'react';
import MenuItem from './MenuItem';
import MenuIcon from '../Icons/MenuIcon/MenuIcon';
import classNames from 'classnames';

import {
  MENU,
  SOCIAL,
} from '../../constants/AppConstants';

let { Component, PropTypes } = React;

export default class MenuPanel extends Component {

  menuBtnClicked = (e) => {
    e.preventDefault();
  }

  toggleMenu = () => {
    this.props.closeMenu();
    this.props.active = !this.props.active;
  }

  render() {
    return (
      <div className={classNames(styles.panel)}>
        <nav>
          {MENU.map((item, i) => {
            return (<MenuItem key={item.title} onclick={this.toggleMenu.bind(this)} item={item} />);
          }, this)}
          <li className={classNames(styles.item, styles.social)}>
            <span>Social Media</span>
            <ul className={classNames(styles.item, styles.socialIcons)}>
              {SOCIAL.map((item, i) => {
                return (
                  <li key={item.title}>
                    <a href={item.href} target="_blank"><img src={item.img} /></a>
                  </li>
                );
              }, this)}
            </ul>
          </li>
        </nav>
      </div>
    );
  }
}
