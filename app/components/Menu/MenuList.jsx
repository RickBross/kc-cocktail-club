import styles from './_Menu.scss';
import React from 'react';
import MenuBar from './MenuBar';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

export default class MenuList extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <nav>
        {this.props.items.map((item) => {
          return (<MenuItem item={item} />);
        }, this)}
      </nav>
    );
  }
}
