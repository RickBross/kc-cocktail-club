import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import styles from './_List.scss';

export default class List extends React.Component {


  componentWillMount() {
  }

  render() {

    return (
      <ul className={classNames(styles.row, styles.list)}>
        {this.props.data.map((item, i) => {
          return (
            <li className={classNames(styles.listitem, this.props.classNames)} key={i}>{item}</li>
          );
        }, this)}
      </ul>
    );
  }
}
