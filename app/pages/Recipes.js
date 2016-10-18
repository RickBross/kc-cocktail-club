import React from 'react';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import styles from './_Pages.scss';

import {
  RECIPES,
} from '../constants/AppConstants';

export default class Recipes extends React.Component {

  componentWillMount() {
    AppStore.setProps({background:'linear-gradient(rgba(26, 46, 46, 0.65),rgba(26, 46, 46, 0.65)),url(http://localhost:8000/images/recipes/banner-whiskey.png)'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});
  }

  render() {
    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          active={MenuStore.getProp('active')}
        />
        <div className={classNames(styles.body, styles.recipes)}>
          {RECIPES.map((item, i) => {
            return (
              <div key={item.title} className={classNames(styles.recipesBlock, styles[item.title+'Block'])}>
                <a href={'#/recipes?type='+item.title+'&a='+Date.now()} className={classNames(styles.fill, styles.link)}>
                  <div className={classNames(styles.recipesBlockText)}>
                      <span>{item.title}</span><br />
                      <span>View Recipes</span>
                  </div>
                </a>
              </div>
            );
          }, this)}
        </div>
      </div>
    );
  }
}
