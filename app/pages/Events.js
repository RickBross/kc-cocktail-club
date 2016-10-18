import React from 'react';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import MenuStore from '../stores/MenuStore';

import styles from './_Pages.scss';

export default class Events extends React.Component {

  render() {
    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          active={MenuStore.getProp('active')}
        />
        <div className={classNames(styles.body, styles.events)}>
          <h1>Events Page</h1>
        </div>
      </div>
    );
  }
}
