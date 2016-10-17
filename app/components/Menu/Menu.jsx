import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';

import styles from './_Menu.scss';
import React from 'react';
import MenuBar from './MenuBar';
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

  render() {
    return (
        <section onClick={this.onClick.bind(this)} className={classNames(styles.menu, {active: this.props.active})}>
          <MenuBar title={this.props.title} active={this.props.active} />
          {/*<MenuList items={this.props.items} />*/}
        </section>
    );
  }
}
