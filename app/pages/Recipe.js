import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import Frame from '../UI/Frame/Frame';
import Banner from '../UI/Banner/Banner';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import {
  ALCOHOL,
  PAGES,
} from '../constants/AppConstants';

import styles from './_Recipe.scss';


export default class Recipe extends React.Component {


  componentDidMount() {

    const bg = 'white'
    AppStore.setProps({tone:'light'});
    MenuStore.setProps({title:'Discover'});

    AppStore.setProps({backgroundColor:bg});
    AppStore.setProps({backgroundImage:'none'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});
  }

  render() {
      let alcohol = this.props.params.alcohol;
      let recipe = this.props.params.recipe;
    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          tone={AppStore.getProp('tone')}
          active={MenuStore.getProp('active')}
        />
      <div className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"], styles.recipe)}>
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet)}>
                <Link to={"/recipes/"+alcohol}><h6>&laquo; Back to {alcohol.capitalizeFirstLetter()} Cocktails</h6></Link>
                <h1>{recipe}</h1>
                <p>
                  Although the real origins of caipirinha, as it is known today, are unknown, according to one account it began around 1918 in the state of São Paulo with a popular recipe made with lime, garlic and honey, indicated for patients with the Spanish flu. Today it is still being used as a remedy for the common cold. As it was quite common to add some distilled spirits to home remedies, in order to expedite the therapeutic effect, rum was commonly used. "Until one day someone decided to remove the garlic and honey. Then added a few tablespoons sugar to reduce the acidity of lime. The ice came next, to ward off the heat."
                </p>
                <p>
                  The caipirinha is the strongest national cocktail of Brazil and is enjoyed in restaurants, bars, and many households throughout the country. Once almost unknown outside Brazil, the drink has become more popular and more widely available in recent years, in large part due to the rising availability of first-rate brands of cachaça outside Brazil.
                </p>
              </div>
              <div className={classNames(styles.primaryPhoto, styles.column, styles.column12, styles.column6Tablet, styles.right)}>
                <Frame width="100%"
                  height="26rem"
                  backgroundImage={"url(http://localhost:8000/images/pages/" + alcohol + "/primary.png)"}
                  backgroundSize="cover"
                  backgroundPosition="65% 0"
                  z="20"
                  accent={"http://localhost:8000/images/pages/" + alcohol + "/accent.png"}
                  accentStyle={{width: '100%', top: '90%', right:'80%', zIndex:'10'}} />
              </div>
            </div>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.column, styles.column12)}>
                <ul style={{backgroundImage:"url(http://localhost:8000/images/pages/" + alcohol + "/banner.png)"}} className={classNames(styles.recipeList, styles.lsn, styles.center, styles.block)}>
                  {ALCOHOL[alcohol.toUpperCase()].recipes.map((item, i) => {
                    return (<Link key={item.linkTo} className={styles.tdn} to={PAGES.RECIPES.linkTo + "/" + alcohol + item.linkTo}><li>{item.name}</li></Link>);
                  }, this)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
