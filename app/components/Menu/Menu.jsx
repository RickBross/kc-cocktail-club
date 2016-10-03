import styles from './_Menu.scss';
import React from 'react';
import MenuBar from './MenuBar';
import MenuList from './MenuList';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
        <section className={styles.menu}>
          <MenuBar title={this.props.title} />
          {/*<MenuList items={this.props.items} />*/}
        </section>
    );
  }
}
