import _ from 'lodash';
import pkg from '../../package';

export {default as ALCOHOL} from './Alcohol';
export {default as ROUTES} from './Routes';
export {default as SOCIAL} from './Social';
export {default as MENU} from './Menu';
export {default as EVENTS} from './Events';

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = 'KC Cocktail Club';
export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
export const ITEMS_GET_ERROR = 'ITEMS_GET_ERROR';
export const ITEMS_UPDATED = 'ITEMS_UPDATED';

export const APP_UPDATED = 'APP_UPDATED';

export const MENU_UPDATED = 'MENU_UPDATED';

export const getRecipesFromAlcohol = function(alcohol) {
  let recipes = [];
  for (var booze in alcohol) {
    if (alcohol.hasOwnProperty(booze)) {
      _.each(alcohol[booze].recipes, function(drink, index){
        recipes.push(drink);
      })
    }
  }
  return recipes;
};

export const getRecipesByName = function(name, alcohol) {
  let recipes = getRecipesFromAlcohol(alcohol);
  let recipe = _.filter(recipes, function(recipe){ return recipe.name === name });
  return recipe;
};
