import styles from './_App.scss';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Home, Recipes, Events, Tickets, Booking } from '../../pages';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';
import classNames from 'classnames'

import {
  PAGES,
} from '../../constants/AppConstants';

const routes = (
  <Route path={PAGES.HOME.linkTo}>
    <IndexRoute component={Home} />
    <Route path={PAGES.EVENTS.linkTo} component={Events} />
    <Route path={PAGES.RECIPES.linkTo} component={Recipes} />
    <Route path={PAGES.TICKETS.linkTo} component={Tickets} />
    <Route path={PAGES.BOOKING.linkTo} component={Booking} />
  </Route>
)

function getAppState() {
  return {
    items: ItemsStore.getAll(),
    menu: MenuStore.getProps(),
    app: AppStore.getProps(),
  };
}

export default class App extends React.Component {

  state = getAppState()

  componentDidMount() {
    ItemsStore.addChangeListener(this.onChange);
    AppStore.addChangeListener(this.onChange);
    MenuStore.addChangeListener(this.onChange);
    AppActions.getItems();
  }

  componentWillUnmount() {
    ItemsStore.removeChangeListener(this.onChange);
    AppStore.removeChangeListener(this.onChange);
    MenuStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(getAppState());
  }

  render() {

    console.log();

    return (
      <div className={classNames(styles.app)} style={{ backgroundSize: this.state.app.backgroundSize, backgroundPosition: this.state.app.backgroundPosition, backgroundImage: this.state.app.background }}>
        <div className={styles.body}>
          <Router history={hashHistory}>
            { routes }
          </Router>
        </div>
      </div>
    );
  }
}
