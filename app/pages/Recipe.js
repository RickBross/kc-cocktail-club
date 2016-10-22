import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import Frame from '../components/Frame/Frame';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import {
  RECIPES,
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
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet, styles.column7Desktop)}>
                <Link to="/recipes"><h6>&laquo; Back to Base Liqours</h6></Link>
                <h1>{this.props.params.recipe} Recipes</h1>
                <p>
                  Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam.

                  Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
              </div>
              <div className={classNames(styles.primaryPhoto, styles.column, styles.column12, styles.column6Tablet, styles.column5Desktop, styles.right)}>
                <Frame width="100%"
                  height="26rem"
                  backgroundImage={"url(http://localhost:8000/images/pages/" + this.props.params.recipe + "/primary.png)"}
                  backgroundSize="cover"
                  backgroundPosition="65% 0"
                  z="20"
                  accent={"http://localhost:8000/images/pages/" + this.props.params.recipe + "/accent.png"}
                  accentStyle={{width: '100%', top: '90%', right:'80%', zIndex:'10'}} />
              </div>
            </div>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.column, styles.column12)}>
                <ul style={{backgroundImage:"url(http://localhost:8000/images/pages/" + this.props.params.recipe + "/list-bg.png)"}} className={classNames(styles.recipeList, styles.lsn, styles.center, styles.block)}>
                  {RECIPES[this.props.params.recipe.toUpperCase()].map((item, i) => {
                    return (<li>{item.name}</li>);
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
