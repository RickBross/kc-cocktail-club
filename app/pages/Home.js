import React from 'react';
import classNames from 'classnames'

import styles from './_Pages.scss';
import Menu from '../components/Menu/Menu';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

export default class Home extends React.Component {

  componentDidMount() {
    MenuStore.setProps({title:'Discover'});
    AppStore.setProps({background:'url(http://localhost:8000/images/hero-bg.png)'});
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
