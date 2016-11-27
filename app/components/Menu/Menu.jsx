import classNames from 'classnames';

import domUtils from '../../util/DOM';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_Menu.scss';
import React from 'react';
import MenuBar from './MenuBar';
import MenuPanel from './MenuPanel';
import MenuList from './MenuList';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  constructor() {
    super();
    this._downListener = this.downListener.bind(this);
    this.clickListener = this.clickListener.bind(this);
  }
  componentWillMount() {
    document.addEventListener("keydown", this._downListener, true);
    document.addEventListener("click", this.clickListener, true);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this._downListener, true);
    document.removeEventListener("click", this.clickListener, true);
  }
  clickListener(e) {
    if (!domUtils.isDescendant(document.getElementsByClassName(styles.body)[0], e.target)) {
      this.closeStore();
    }
  }
  downListener(e) {
    const escKey = 27;
    if (e.keyCode === escKey) {
      this.closeStore();
    }
  }
  onClick(event) {
    this.toggleActive();
  }

  closeStore() {
    MenuStore.setProps({active: false});
  }

  toggleActive() {
    MenuStore.setProps({active: !MenuStore.getProp('active')});
  }

  getWrapperClasses() {

    let wrapperActive;

    if (this.props.active) {
      wrapperActive = styles.active;
    }

    return classNames(styles.body, styles[this.props.tone+'Tone'], wrapperActive);
  }

  getWrapperClassesTwo() {

    let wrapperActive;

    if (this.props.active) {
      wrapperActive = styles.active;
    }

    return classNames(styles.wrapper, wrapperActive);
  }

  render() {
    return (
        <div style={this.props.styles} className={this.parent} className={this.getWrapperClasses()}>
          <MenuBar
            tone={this.props.tone}
            title={this.props.title}
            active={this.props.active}
            onclick={this.onClick.bind(this)} />
          <MenuPanel
            tone={this.props.tone}
            active={this.props.active}
            closeMenu={this.onClick.bind(this)} />
          {/*<MenuList items={this.props.items} />*/}
        </div>
    );
  }
}
