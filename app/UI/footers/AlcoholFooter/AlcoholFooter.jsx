import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import styles from './_AlcoholFooter.scss';

import GhostHeader from '../../GhostHeader/GhostHeader';
import RevealFooter from '../../RevealFooter/RevealFooter';

export default class AlcoholFooter extends React.Component {


  componentWillMount() {
  }

  componentDidMount() {
  }

  alcoholHeader() {
    return this.props.alcohol + ' Recipes';
  }

  render() {
    return (
      <RevealFooter style={this.props.styles} classNames={classNames(styles[this.props.tone + 'Tone'], this.props.classNames, styles.row)}>
        {this.props.children}
        <Link to={"/recipes/" + this.props.alcohol}>
          <div className={classNames(styles.footerText)}>
            <span>Make the Drinks</span>
            <h5>{this.alcoholHeader()}</h5>
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
