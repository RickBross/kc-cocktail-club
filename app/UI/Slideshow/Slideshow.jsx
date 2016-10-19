import styles from './_Slideshow.scss'
import React from 'react'
import classNames from 'classnames'

let { Component, PropTypes } = React

export default class Slideshow extends Component {

  rootClassNames(){
    return classNames(styles.slideshow, styles[this.props.tone+'Tone'], this.tone())
  }

  tone() {
    return this.props.tone ? styles[this.props.tone+'Tone'] : null
  }

  render() {
    return (
      <ul className={this.rootClassNames()}>
        <li className={styles.active} onClick={this.props.onclick} key="1" style={{backgroundImage: 'url(http://localhost:8000/images/events/hero/1.jpg)'}}>
          Meeting 1
        </li>
        <li onClick={this.props.onclick} key="2" style={{backgroundImage: 'url(http://localhost:8000/images/events/hero/2.jpg)'}}>
          Meeting 2
        </li>
      </ul>
    )
  }
}
