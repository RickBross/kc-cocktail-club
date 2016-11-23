import styles from './_DrinkSlideshow.scss'
import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'
import Frame from '../Frame/Frame';

import {
  EVENTS,
  ALCOHOL,
  getRecipeByName,
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
      recipe = getRecipeByName(drink, ALCOHOL);
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
      <div className={styles.slideshow}>
        <ul className={classNames(styles.slideshowSlides)}>
          {
            drinks.map((drink, index) => (
              <li key={index} className={ classNames(this.activeClass(index)) }>
                <div className={this.slideClasses(index)} onClick={this.props.onclick}>
                  <div className={classNames(styles.row)}>
                    <div className={classNames(styles.bg)}></div>
                    <div className={classNames(styles.fg,styles.centerAbs)}>
                      <Link to={'/recipe' + drink.linkTo}>
                        <div className={classNames(styles.layer, styles.centerAbs)}>
                          <Frame
                            classNames={styles.frame}
                            width="40rem"
                            height="25rem"
                            backgroundImage={"url(http://localhost:8000/images/recipes" + drink.linkTo + "/banner.png)"}
                            backgroundSize="cover"
                            accent={"http://localhost:8000/images/recipes" + drink.linkTo + "/drink.png"}
                            accentStyle={{bottom: '4.5rem', left: '-10.25rem', zIndex: '-1'}}
                            border={false}
                            z="0"
                          />
                        <div className={classNames(styles.layerText)}>
                            <h4>{drink.name}</h4>
                            <hr></hr>
                            <span>
                              View Recipe   &rarr;
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
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
    return classNames(styles.drinkSlideshow, styles[this.props.tone+'Tone'])
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
