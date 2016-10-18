import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import styles from './_Menu.scss';
import Menu from './Menu';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  };

  test() {
    console.log(123123);
    Menu.toggleMenu();
  }

  render() {
    return (
      <Link to={this.props.item.linkTo} onClick={this.props.onclick}>
        <li className={classNames(styles.item)} key={'menu-item-' + this.props.item.id}>
          <span>{this.props.item.caption}</span><br />
          <span>{this.props.item.title}</span>
        </li>
      </Link>
    );
  }
}
