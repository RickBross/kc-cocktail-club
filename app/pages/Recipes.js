import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import styles from './_Pages.scss';

import {
  RECIPES,
} from '../constants/AppConstants';

const getWidth = function(node) {
  return React.findDOMNode(node).offsetWidth;
}


class ActiveBlock extends React.Component {

  isActive(item) {
    if (this.props.recipe === item) {
      return styles.active;
    }
  }
  render() {
    return (<div style={{clip: 'rect(0px,' +  this.props.width + ',777px,0px)'}} className={classNames(styles.recipesFlyer, styles[this.props.recipe+'Flyer'], this.isActive(this.props.recipe))}></div>)
  }
};


export default class Recipes extends React.Component {

  isActive(item) {
    if (this.props.params.recipe === item) {
      return styles.active;
    }
  }

  componentWillMount() {

    const bg = 'linear-gradient(rgba(26, 46, 46, 0.65),rgba(26, 46, 46, 0.65)),url(http://localhost:8000/images/recipes/banner-whiskey.png)'

    AppStore.setProps({backgroundImage:bg});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});

    AppStore.setProps({tone:'dark'});
    MenuStore.setProps({title:'Discover'});
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
      <div className={classNames(styles.body, styles.recipes, styles[this.props.params.recipe+'Active'])}>
          {RECIPES.map((item, i) => {
            return (
              <div key={item.title+'Block'} className={classNames(styles.recipesBlock, this.isActive(item.title), styles[item.title+'Block'])}>
                <Link onClick={this.onClick.bind(this)} to={'recipes/'+item.title} className={classNames(styles.fill, styles.link)}>
                  <div className={classNames(styles.recipesBlockText)}>
                      <span>{item.title}</span><br />
                      <span>View Recipes</span>
                  </div>
                </Link>
              </div>
            );
          }, this)}
        </div>
      </div>
    );
  }
}
