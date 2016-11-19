import React from 'react';
import classNames from 'classnames';

import MenuStore from '../../stores/MenuStore';
import AppStore from '../../stores/AppStore';

import styles from './_IngredientList.scss';

let { Component, PropTypes } = React;

export default class IngredientList extends Component {

  componentWillMount() {
    this.alcohol = this.props.alcohol;
    this.recipe = this.props.recipe;
    this.ingredients = this.props.recipe.ingredients;
  }

  render() {
    return (
      <div className={classNames(styles.ingredientList, styles[this.alcohol+'Ingredients'], this.props.classNames)}>
        <ul className={classNames(styles.lsn)}>
            {this.ingredients.map((item, i) => {
              return (
                <li key={i}>
                  <span>{item.quantity}</span>
                  <span>{item.title}</span>
                </li>
              );
            }, this)}
        </ul>
      </div>
    );
  }
}
