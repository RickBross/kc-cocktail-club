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
    let recipe;
    _.each(this.props.drinks, function(drink){
      recipe = getRecipesByName(drink, ALCOHOL)[0];
      drinks.push(recipe);
    }.bind(this));
  }
  componentWillUnmount() {
  }
  iCanJump(index) {
    return index >= 0 && index <= drinks.length-1;
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
      <div className={styles.slideshowSlides}>
        <ul className={classNames(styles.slideshowSlides)}>
          {
            drinks.map((drink, index) => (
              <li key={index} className={ classNames(this.activeClass(index)) }>
                <div className={this.slideClasses(index)} onClick={this.props.onclick}>
                  <div className={classNames(styles.bg)}></div>
                  <div className={classNames(styles.fg,styles.centerAbs)}>
                    <Link to={'/events/' + (parseInt(index+1))}>
                      <div className={classNames(styles.layer)}>
                        <Frame width="70%"
                          height="15rem"
                          backgroundImage={"url(http://localhost:8000/images/recipes" + drink.linkTo + "/banner.png)"}
                          backgroundSize="cover"
                          accent={"http://localhost:8000/images/recipes" + drink.linkTo + "/drink.png"}
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
              {this.state.activeIndex+1} / {drinks.length}
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
