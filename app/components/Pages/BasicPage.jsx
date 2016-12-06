import styles from './_BasicPage.scss';
import React from 'react';
import classNames from 'classnames'

import Menu from '../Menu/Menu';
import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

export default class BasicPage extends React.Component {

  constructor() {
    super()
    this.state = {
      menuStyles: {
        position: 'fixed'
      },
      scrollBottom: window.height
    };
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  getViewport() {

     var viewPortWidth;
     var viewPortHeight;

     // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
     if (typeof window.innerWidth != 'undefined') {
       viewPortWidth = window.innerWidth,
       viewPortHeight = window.innerHeight
     }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
     else if (typeof document.documentElement != 'undefined'
     && typeof document.documentElement.clientWidth !=
     'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
        viewPortHeight = document.documentElement.clientHeight
     }

     // older versions of IE
     else {
       viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
       viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
     }
     return [viewPortWidth, viewPortHeight];
    }

  render() {
    var year = (new Date()).getFullYear();
    return (
      <article className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"])}>
        <Menu
          styles={this.state.menuStyles}
          title={MenuStore.getProp('title')}
          tone={AppStore.getProp('tone')}
          active={MenuStore.getProp('active')}
        />
        <div className={classNames(styles.mainLayer)}>
          {this.props.children}
        </div>
      </article>
    );
  }
}
