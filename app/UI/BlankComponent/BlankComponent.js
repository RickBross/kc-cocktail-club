import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import styles from './_BlankComponent.scss';

export default class BlankComponent extends React.Component {


  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={this.props.styles} className={classNames(styles.row)}>
      </div>
    );
  }
}