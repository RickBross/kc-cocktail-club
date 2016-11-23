import styles from './_DrinkSlideshow.scss'
import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import Frame from '../Frame/Frame';

import {
  EVENTS,
  ALCOHOL,
  getRecipesByName,
} from '../../constants/AppConstants'

let { Component, PropTypes } = React;

let drinks = [];


class Slider extends React.Component {
  constructor() {
    super()
    this.state = { activeIndex: 0 };
  }
  next(e) {
    this.jumpToSlide(this.state.activeIndex+1);
  }
  previous(e) {
    this.jumpToSlide(this.state.activeIndex-1);
  }
  componentWillMount() {
    console.log(111, recipes);
    let recipes = [];
    _.each(this.props.drinks, function(drink){
      recipes.push(getRecipesByName(drink, ALCOHOL));
    }.bind(this));
    console.log(222, recipes);
  }
  componentWillUnmount() {
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
            this.props.drinks.map((drink, index) => (
              <li key={index} className={ classNames(this.activeClass(index)) }>
                <div className={this.slideClasses(index)} onClick={this.props.onclick}>
                  <div className={classNames(styles.bg)}></div>
                  <div className={classNames(styles.fg,styles.centerAbs)}>
                    <Link to={'/events/' + (parseInt(index+1))}>
                      <div className={classNames(styles.layer)}>
                        <Frame width="70%"
                          height="15rem"
                          backgroundImage={"url(http://localhost:8000/images/pages/events/banner.png)"}
                          backgroundSize="cover"
                          backgroundPosition="65% 0"
                          accent={"http://localhost:8000/images/recipes/drink.png"}
                          accentStyle={{bottom: '1.5rem', right: '-6.25rem', zIndex: '0'}}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>
        <div className={classNames(styles.controls)}>
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

export default class DrinkSlideshow extends Component {

  rootClassNames(){
    return classNames(styles.slideshow, styles[this.props.tone+'Tone'])
  }
  tone() {
    return this.props.tone ? styles[this.props.tone+'Tone'] : null
  }
  componentWillMount() {
    this.activeIndex = 0;
  }

  render() {
    return (
      <div className={this.rootClassNames()}>
        <Slider drinks={ this.props.drinks } />
      </div>
    )
  }
}
