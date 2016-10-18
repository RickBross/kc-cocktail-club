import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';

import styles from './_Menu.scss';
import React from 'react';
import MenuBar from './MenuBar';
import MenuPanel from './MenuPanel';
import MenuList from './MenuList';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: [],
  };

  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  onClick(event) {
    this.toggleActive();
  }

  toggleActive() {
    MenuStore.setProps({active: !MenuStore.getProp('active')});
  }

  getWrapperClasses() {

    let wrapperActive;

    if (this.props.active) {
      wrapperActive = styles.active;
    }

    return classNames(styles.body, wrapperActive);
  }

  getWrapperClassesTwo() {

    let wrapperActive;

    if (this.props.active) {
      wrapperActive = styles.active;
    }

    return classNames(styles.wrapper, wrapperActive);
  }

  render() {
    return (
        <div className={this.parent} className={this.getWrapperClasses()}>
          <MenuBar title={this.props.title} active={this.props.active} onclick={this.onClick.bind(this)} />
          <MenuPanel active={this.props.active} closeMenu={this.onClick.bind(this)} />
          {/*<MenuList items={this.props.items} />*/}
        </div>
    );
  }
}
