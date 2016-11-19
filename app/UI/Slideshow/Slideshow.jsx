import styles from './_Slideshow.scss'
import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import {
  EVENTS
} from '../../constants/AppConstants'

let { Component, PropTypes } = React;


class Slider extends React.Component {
  constructor() {
    super()
    this.state = { activeIndex: 0 };
  }
  downListener(e) {
    const key = this.getKey(e);
    if (key === 'right') {
      this.next();
    }
    if (key === 'left') {
      this.previous();
    }
  }
  next(e) {
    this.jumpToSlide(this.state.activeIndex+1);
  }
  previous(e) {
    this.jumpToSlide(this.state.activeIndex-1);
  }
  upListener(e) {
    const key = this.getKey(e);
  }
  getKey(e) {
    switch (e.keyCode) {
        case 37:
            return 'left';
            break;
        case 38:
            return 'up';
            break;
        case 39:
            return 'right';
            break;
        case 40:
            return 'down';
            break;
    }
  }
  componentWillMount() {
    let leftKey = 37, upKey = 38, rightKey = 39, downKey = 40;
    document.addEventListener("keydown", this.downListener.bind(this));
    document.addEventListener("keyup", this.upListener.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.downListener.bind(this), false);
    document.removeEventListener("keyup", this.upListener.bind(this), false);
  }
  iCanJump(index) {
    return index >= 0 && index <= this.props.slides.length-1;
  }
  jumpToSlide(index) {
    if (this.iCanJump(index)) {
      this.setState({ activeIndex: index });
    }
  }
  activeClass(idx) {
    if (idx == this.state.activeIndex) {
      return styles.active;
    }
  }
  slideClasses(idx) {
    let active;
    if (this.state.activeIndex === idx) {
      active = styles.active;
    }
    return classNames(styles['slide'+(idx+1)], styles.slide, 'slide', active);
  }
  render() {
    return (
      <div className="slideshow">
        <ul className={classNames("slideshow-slides", styles.slideshowSlides)}>
          {
            this.props.slides.map((slide, index) => (
              <li key={index} className={ classNames(this.activeClass(index)) }>
                <div className={this.slideClasses(index)} onClick={this.props.onclick}>
                  <div className={classNames(styles.bg)}></div>
                  <div className={classNames(styles.fg,styles.centerAbs)}>
                    <Link to={'/events/' + (parseInt(index+1))}>
                      <div className={classNames(styles.layer)}>
                        <img src="http://localhost:8000/images/events/hero/drop.png" />
                        <h1>Meeting #{index+1}</h1>
                        <p>{slide.date}</p>
                        <p>{slide.address}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        <div className={classNames("slideshow-dots", styles.controls)}>
          <p>
            <span onClick={ (event)=> this.previous() } className={styles.arrow}>
              &larr;
            </span>
              {this.state.activeIndex+1} / {this.props.slides.length}
            <span onClick={ (event)=> this.next() } className={styles.arrow}>
              &rarr;
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default class Slideshow extends Component {

  rootClassNames(){
    return classNames(styles.slideshow, styles[this.props.tone+'Tone'])
  }
  tone() {
    return this.props.tone ? styles[this.props.tone+'Tone'] : null
  }
  componentWillMount() {
    this.activeIndex = 0;
    this.slides = EVENTS;
  }

  render() {
    return (
      <div className={this.rootClassNames()}>
        <Slider slides={ this.slides } />
      </div>
    )
  }
}
