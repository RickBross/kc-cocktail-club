import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import BasicPage from '../components/Pages/BasicPage';

import Menu from '../components/Menu/Menu';
import Frame from '../UI/Frame/Frame';
import Banner from '../UI/Banner/Banner';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import {
  ALCOHOL,
  ROUTES,
} from '../constants/AppConstants';

import styles from './_RecipeList.scss';


export default class RecipeList extends React.Component {


  componentDidMount() {
    document.title = this.props.params.alcohol.capitalizeFirstLetter() + " Recipes - Kansas City Cocktail Club";

    const bg = 'white'
    AppStore.setProps({tone:'light'});
    MenuStore.setProps({title:'Discover'});

    AppStore.setProps({backgroundColor:bg});
    AppStore.setProps({backgroundImage:'none'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});
  }

  render() {
      let alcoholKey = this.props.params.alcohol;
    return (
      <BasicPage>
        <div className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"], styles.recipeList, styles[alcoholKey + 'Alcohol'])}>
          <div>
            <Banner
              classNames={classNames(styles.banner)}
              accentClassNames={classNames(styles.accent)}
              backgroundImage={"url(http://localhost:8000/images/pages/" + alcoholKey + "/primary.png)"}
              backgroundSize="cover"
              backgroundPosition="65% 0"
              accent={"http://localhost:8000/images/pages/" + alcoholKey + "/accent.png"} />
          </div>
          <div className={classNames(styles.container)}>
            <div className={classNames(styles.row, styles.description)}>
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet, styles.column7Desktop)}>
                <div className={classNames(styles.pageHeading)}>
                  <Link to="/recipes"><h6>&laquo; Back to Base Liqours</h6></Link>
                  <h1>{alcoholKey} Recipes</h1>
                </div>
                <p>
                  Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

                  Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
              <div className={classNames(styles.primaryPhoto, styles.column, styles.column12, styles.column6Tablet, styles.column5Desktop, styles.right)}>
                <Frame width="100%"
                  height="26rem"
                  backgroundImage={"url(http://localhost:8000/images/pages/" + alcoholKey + "/primary.png)"}
                  backgroundSize="cover"
                  backgroundPosition="65% 0"
                  z="20"
                  accent={"http://localhost:8000/images/pages/" + alcoholKey + "/accent.png"}
                  accentStyle={{width: '100%', top: '90%', right:'20%', zIndex:'30'}} />
              </div>
            </div>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.column, styles.column12)}>
                <ul style={{backgroundImage:"url(http://localhost:8000/images/pages/" + alcoholKey + "/banner.png)"}} className={classNames(styles.list, styles.lsn, styles.center, styles.block)}>
                  {ALCOHOL[alcoholKey.toUpperCase()].recipes.map((item, i) => {
                    return (<Link key={item.linkTo} className={styles.tdn} to={ROUTES.RECIPE.linkTo + item.linkTo}><li>{item.name}</li></Link>);
                  }, this)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BasicPage>
    );
  }
}
