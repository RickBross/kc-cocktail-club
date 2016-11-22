import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import Drink from '../UI/Drink/Drink';
import Banner from '../UI/Banner/Banner';
import GhostHeader from '../UI/GhostHeader/GhostHeader';
import IngredientList from '../UI/IngredientList/IngredientList';
import Video from '../UI/Video/Video';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import {
  ALCOHOL,
  ROUTES,
} from '../constants/AppConstants';

import styles from './_RecipeDetail.scss';


export default class RecipeDetail extends React.Component {


  componentWillMount() {
    let recipeName = this.getRecipe().name;

    document.title = recipeName + " RecipeDetail - Kansas City Cocktail Club";

    const bg = 'white'
    AppStore.setProps({tone:'light'});
    MenuStore.setProps({title:'Discover'});

    AppStore.setProps({backgroundColor:bg});
    AppStore.setProps({backgroundImage:'none'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});
  }

  getRecipe() {
    let recipe = ALCOHOL[this.props.params.alcohol.toUpperCase()].recipes.filter(function(item) {
      return item.linkTo === "/"+this.props.params.recipe;
    }.bind(this))[0];
    return recipe;
  }

  render() {
      let alcoholKey = this.props.params.alcohol;
      let recipeKey = this.props.params.recipe;
    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          tone={AppStore.getProp('tone')}
          active={MenuStore.getProp('active')}
        />
      <div className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"], styles.recipe, styles[alcoholKey+'Alcohol'])}>
        <div className={classNames(styles.bannerWrapper)}>
          <Banner
            classNames={classNames(styles.banner)}
            accentClassNames={classNames(styles.accent)}
            backgroundImage={"url(http://localhost:8000/images/pages/" + alcoholKey + "/banner.png)"}
            backgroundSize="cover"
            backgroundPosition="65% 0"
            accent={"http://localhost:8000/images/pages/" + alcoholKey + "/" + recipeKey + ".png"} />
        </div>
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.history, styles.row)}>
              <GhostHeader
                styles={{
                  top:"80%",
                  left:"10%"
                }}
                text="HISTORY"
              />
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet)}>
                <Link to={"/recipes/"+alcoholKey}><h6>&laquo; Back to {alcoholKey.capitalizeFirstLetter()} Cocktails</h6></Link>
                <div className={classNames(styles.pageHeading)}>
                  <h1>{recipeKey}</h1>
                </div>
                <p>
                  Although the real origins of caipirinha, as it is known today, are unknown, according to one account it began around 1918 in the state of São Paulo with a popular recipe made with lime, garlic and honey, indicated for patients with the Spanish flu. Today it is still being used as a remedy for the common cold. As it was quite common to add some distilled spirits to home remedies, in order to expedite the therapeutic effect, rum was commonly used. "Until one day someone decided to remove the garlic and honey. Then added a few tablespoons sugar to reduce the acidity of lime. The ice came next, to ward off the heat."
                </p>
                <p>
                  The caipirinha is the strongest national cocktail of Brazil and is enjoyed in restaurants, bars, and many households throughout the country. Once almost unknown outside Brazil, the drink has become more popular and more widely available in recent years, in large part due to the rising availability of first-rate brands of cachaça outside Brazil.
                </p>
              </div>
              <div className={classNames(styles.primaryPhoto, styles.column, styles.column12, styles.column6Tablet)}>
                <Drink
                  backgroundImage={"url(http://localhost:8000/images/pages/" + alcoholKey + "/" + recipeKey + ".png)"}
                  backgroundSize="contain"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  z="20"
                  accentStyle={{
                    width: '100%',
                    height: '100%',
                    top: '0',
                    right:'0',
                    zIndex:'10',
                    backgroundImage: "url(http://localhost:8000/images/pages/" + alcoholKey + "/banner.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                  }} />
              </div>
            </div>
            <div className={classNames(styles.instructions, styles.row)}>
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet)}>
                <IngredientList alcohol={alcoholKey} recipe={this.getRecipe()} />
              </div>
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet)}>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
              </div>
              <GhostHeader
                styles={{
                  top:"0",
                  left:"20%",
                  zIndex: "0"
                }}
                text="RECIPE"
              />
            </div>
            <div className={classNames(styles.video, styles.row)}>
              <GhostHeader
                styles={{
                  top:"-1rem",
                  left:"-1rem",
                  zIndex: "0"
                }}
                text="HOW TO"
              />
              <Video></Video>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
