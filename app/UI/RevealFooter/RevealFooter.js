import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import styles from './_RevealFooter.scss';

export default class RevealFooter extends React.Component {


  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <footer style={this.props.styles} className={classNames(this.props.classNames, styles.row)}>
        <div className={classNames(styles.footerWrapper)}>
          {this.props.children}
        </div>
      </footer>
    );
  }
}
