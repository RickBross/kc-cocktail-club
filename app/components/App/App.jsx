import styles from './_App.scss';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {Home, Recipes, Events} from '../../pages';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import MenuStore from '../../stores/MenuStore';
import classNames from 'classnames'

const routes = (
  <Route path="/">
    <IndexRoute component={Home} />
    <Route path="/events" component={Events} />
    <Route path="/recipes" component={Recipes} />
  </Route>
)

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
        <div className={styles.body}>
          <Router history={hashHistory}>
            { routes }
          </Router>
        </div>
      </div>
    );
  }
}
