import React from 'react';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import MenuStore from '../stores/MenuStore';

import styles from './_Pages.scss';

export default class Tickets extends React.Component {

  render() {
    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          active={MenuStore.getProp('active')}
        />
        <div className={classNames(styles.body, styles.recipes)}>
          <h1>Tickets Page</h1>
        </div>
      </div>
    );
  }
}
