import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import Slideshow from '../UI/Slideshow/Slideshow';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import styles from './_Pages.scss';


export default class Events extends React.Component {


  componentDidMount() {

    const bg = 'white'
    AppStore.setProps({tone:'light'});
    MenuStore.setProps({title:'Discover'});

    AppStore.setProps({background:bg});
    AppStore.setProps({backgroundImage:'none'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});
  }

  render() {

    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          tone={AppStore.getProp('tone')}
          active={MenuStore.getProp('active')} />
        <div className={classNames(styles.body, styles.events)}>
            <div className={classNames(styles.wrapper, styles.makeBackground)}>
              <Slideshow
                tone={AppStore.getProp('tone')} />
            </div>
          </div>
        </div>
      );
  }
}
