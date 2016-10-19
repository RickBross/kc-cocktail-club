import styles from './_MenuIcon.scss';
import React from 'react';
import classNames from 'classnames';

let { Component, PropTypes } = React;

export default class MenuItem extends Component {

  static defaultProps = {
    onclick: [],
    menuActive: false,
  };

  static propTypes = {
    onclick: PropTypes.func.isRequired,
    menuActive: PropTypes.bool.isRequired,
  };

  rootClassNames(){
    let classes = [];

    var activeStyles;

    if (this.props.active) {
      activeStyles = styles.menuIconActive;
    }


    classes = classNames(styles.menuIcon, styles[this.props.tone+'Tone'], activeStyles, this.tone());

    return classes;
  }

  tone() {
    return this.props.tone ? styles[this.props.tone+'Tone'] : null
  }

  render() {
    return (
      <span onClick={this.props.onclick} className={this.rootClassNames()}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </span>
    );
  }
}
