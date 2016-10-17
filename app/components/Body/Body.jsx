import styles from './_Body.scss';
import React from 'react';
import Footer from '../Footer/Footer';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import {Home, Recipes, Events} from '../../pages';

let { PropTypes } = React;

const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    <Route path="/events" component={Events} />
    <Route path="/recipes" component={Recipes} />
  </Route>
)
export default class Body extends React.Component {


  render() {
    return (
      <div className={styles.body}>
        <Router history={hashHistory}>
          { routes }
        </Router>
        <Footer />
      </div>
    );
  }
}
