import React from 'react';

import styles from './_Pages.scss';
import MenuStore from '../stores/MenuStore';

export default class Home extends React.Component {

  componentDidMount() {
    MenuStore.setProps({title:'Discover'});
  }

  render() {
    return (
      <div className={styles.home}>
        <img className={styles.homeLogo} src="./images/home-logo.png" />
      </div>
    );
  }
}
