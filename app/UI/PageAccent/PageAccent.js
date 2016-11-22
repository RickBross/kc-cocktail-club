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
      <div style={this.props.styles} className={classNames(styles.pageAccent, styles.row)}>\
        
      </div>
    );
  }
}
