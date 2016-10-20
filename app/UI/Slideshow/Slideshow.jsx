import styles from './_Slideshow.scss'
import React from 'react'
import classNames from 'classnames'

let { Component, PropTypes } = React

export default class Slideshow extends Component {

  componentWillMount() {
    this.activeIndex = 1;
    this.slides = [
      {
        date: 'August 24, 2016 | 7:30pm',
        address: '2101 Broadway 64108'
      }
    ];
  }

  rootClassNames(){
    return classNames(styles.slideshow, styles[this.props.tone+'Tone'])
  }

  tone() {
    return this.props.tone ? styles[this.props.tone+'Tone'] : null
  }

  render() {
    return (
      <div className={this.rootClassNames()}>
        <div className={classNames(styles.controls)}>
          <p><span className={styles.arrow}>&larr;</span> {this.activeIndex} / {this.slides.length} <span className={styles.arrow}>&rarr;</span></p>
        </div>
        <ul>
          {this.slides.map((item, i) => {
            return (
              <li>
                <div className={classNames(styles.slide1, styles.slide, styles.active)} onClick={this.props.onclick} key="1">
                  <div className={classNames(styles.bg)}></div>
                  <div className={classNames(styles.fg,styles.centerAbs)}>
                    <div className={classNames(styles.layer)}>
                      <img src="http://localhost:8000/images/events/hero/drop.png" />
                      <h1>Meeting #{i+1}</h1>
                      <p>{item.date}</p>
                      <p>{item.address}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          }, this)}
          {/*<li onClick={this.props.onclick} key="2" style={{backgroundImage: 'url(http://localhost:8000/images/events/hero/2.jpg)'}}>
            Meeting 2
          </li>*/}
        </ul>
      </div>
    )
  }
}
