import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import styles from './_Error404.scss';

const getWidth = function(node) {
  return React.findDOMNode(node).offsetWidth;
}


export default class Error404 extends React.Component {

  isActive(item) {
    if (this.props.params.recipe === item) {
      return styles.active;
    }
  }

  componentDidMount() {

    AppStore.setProps({tone:'dark'});
    MenuStore.setProps({title:'Discover'});

    AppStore.setProps({backgroundColor:'#536262'});
    AppStore.setProps({backgroundImage:'none'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});
  }

  onClick() {
    AppStore.setProps({tone:'light'});
  }

  render() {

    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          tone={AppStore.getProp('tone')}
          active={MenuStore.getProp('active')}
        />
      <div className={classNames(styles.body, styles.error404, styles[AppStore.getProp('tone')+"Tone"])}>
          <div className={classNames(styles.wrapper)}>
            <h1>404</h1>
            <p>Looks like you got turned around. Its ok, happens to the best of us.  Just navigate through the menu and we’ll get you back on track!</p>
          </div>
        </div>
      </div>
    );
  }
}
