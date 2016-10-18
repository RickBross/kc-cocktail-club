import React from 'react';
import classNames from 'classnames'

import styles from './_Pages.scss';
import Menu from '../components/Menu/Menu';
import MenuStore from '../stores/MenuStore';

export default class Home extends React.Component {

  componentDidMount() {
    MenuStore.setProps({title:'Discover'});
  }

  render() {
    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          active={MenuStore.getProp('active')}
        />
        <div className={classNames(styles.body, styles.home)}>
          <img className={styles.homeLogo} src="./images/home-logo.png" />
        </div>
      </div>
    );
  }
}
