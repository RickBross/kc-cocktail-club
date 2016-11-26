import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import styles from './_PageAccent.scss';

export default class PageAccent extends React.Component {


  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={classNames(styles.pageAccent, styles.row)}>
        <img src={this.props.img} />
      </div>
    );
  }
}
