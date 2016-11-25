import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import styles from './_RecipeFooter.scss';

import GhostHeader from '../../GhostHeader/GhostHeader';
import RevealFooter from '../../RevealFooter/RevealFooter';

export default class RecipeFooter extends React.Component {


  componentWillMount() {
    console.log(this.props.classNames);
  }

  componentDidMount() {
  }

  render() {
    return (
      <RevealFooter style={this.props.styles} classNames={classNames(this.props.classNames, styles.row)}>
        <Link to="/recipes/rum">
          <div className={classNames(styles.footerText)}>
            <span>Make the Drinks</span>
            <h5>Rum Recipes</h5>
          </div>
          <GhostHeader
            classNames={[styles.footerHeader, styles.ghostHeader]}
            tone="dark"
            text="HANDCRAFTED"
          />
          <img className={classNames(styles.footerImage)} src="http://localhost:8000/images/footer-drink.png" />
        </Link>
      </RevealFooter>
    );
  }
}
