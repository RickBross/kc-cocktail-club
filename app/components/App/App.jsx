import styles from './_App.scss';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import MenuStore from '../../stores/MenuStore';
import Body from '../Body/Body';
import Menu from '../Menu/Menu';
import classNames from 'classnames'

function getAppState() {
  return {
    items: ItemsStore.getAll(),
    menu: MenuStore.getProps(),
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    MenuStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
    MenuStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {
    return (
      <div className={classNames(styles.app)}>
        <Menu
          title={this.state.menu.title}
          active={this.state.menu.active}
        />
        <Body/>
      </div>
    );
  }
}
