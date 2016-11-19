import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import styles from './_Video.scss';

export default class Video extends React.Component {


  componentDidMount() {
  }

  getVideo() {
    let recipe = ALCOHOL[this.props.params.alcohol.toUpperCase()].recipes.filter(function(item) {
      return item.linkTo === "/"+this.props.params.recipe;
    }.bind(this))[0];
    return recipe;
  }

  render() {
    return (
      <div className={classNames(styles.videoWrapper, styles.row)}>
        <div className={classNames(styles.video)}>
          <video>
            Your browser does not support the video tag.
          </video>
          <div className={classNames(styles.accent)}></div>
        </div>
      </div>
    );
  }
}
