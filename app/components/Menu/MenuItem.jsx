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

  render() {
    return (
      <Link to={this.props.item.linkTo} onClick={this.props.onclick} key={'menu-item-' + this.props.item.title.toLowerCase()}>
        <li className={classNames(styles.item)}>
          <span>{this.props.item.caption}</span><br />
          <span>{this.props.item.title}</span>
        </li>
      </Link>
    );
  }
}
