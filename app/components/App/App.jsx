import styles from './_App.scss';

import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router';

import {
  Home,
  Recipes,
  RecipeList,
  Recipe,
  Events,
  EventDetail,
  Tickets,
  Booking,
  Error404 } from '../../pages';

import React from 'react';
import AppActions from '../../actions/AppActions';
import ItemsStore from '../../stores/ItemsStore';
import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';
import classNames from 'classnames'

import {
  ROUTES,
} from '../../constants/AppConstants';

const routes = (
  <Route path={ROUTES.HOME.linkTo}>
    <IndexRoute component={Home} />
    <Route path={ROUTES.EVENTS.linkTo} component={Events} />
      <Route path={ROUTES.EVENT.linkTo} component={EventDetail} />
    <Route path={ROUTES.RECIPES.linkTo} component={Recipes} />
      <Route path='/recipes/:alcohol' component={RecipeList} />
      <Route path='/recipes/:alcohol/:recipe' component={Recipe} />
    <Route path={ROUTES.TICKETS.linkTo} component={Tickets} />
    <Route path={ROUTES.BOOKING.linkTo} component={Booking} />
    <Route path='/404' component={Error404} />
    <Redirect from='*' to='/404' />
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

  state = getAppState();

  componentWillMount() {
    AppStore.setProps({tone:'dark'});
  }

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
    return (
      <div className={classNames(styles.app, styles[AppStore.getProp('tone')+'Tone'])} style={{ backgroundSize: this.state.app.backgroundSize, backgroundColor: this.state.app.backgroundColor, backgroundPosition: this.state.app.backgroundPosition, backgroundImage: this.state.app.backgroundImage }}>
        <div className={styles.body}>
          <Router asd={this.state} history={hashHistory}>
            { routes }
          </Router>
        </div>
      </div>
    );
  }
}
