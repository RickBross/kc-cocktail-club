import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import styles from './_GhostHeader.scss';

let zIndex;

export default class GhostHeader extends React.Component {


  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={this.props.styles} className={classNames(this.props.classNames, styles.ghostHeader)}>
        <h3 style={zIndex} className={classNames(styles.ghost)}>{this.props.text}</h3>
      </div>
    );
  }
}
