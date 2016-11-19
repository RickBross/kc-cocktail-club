import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import Frame from '../UI/Frame/Frame';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import styles from './_EventDetail.scss';


export default class EventDetail extends React.Component {


  componentDidMount() {
    document.title = "Private Events - Kansas City Cocktail Club";

    const bg = 'white'
    AppStore.setProps({tone:'light'});
    MenuStore.setProps({title:'Discover'});

    AppStore.setProps({backgroundColor:bg});
    AppStore.setProps({backgroundImage:'none'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});
  }

  render() {
    let eventNumber = this.props.params.event;
    let eventIndex = parseInt(eventIndex)-1;
    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          tone={AppStore.getProp('tone')}
          active={MenuStore.getProp('active')}
        />
      <div className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"], styles.booking)}>
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet, styles.column7Desktop)}>
                <h6>Meeting #{eventNumber}</h6>
                <h1>A happy hour the whole team can get behind</h1>
                <p>
                  Cocktail Club is a monthly gathering of people who love to drink and love to learn. We provide a fun atmosphere to begin crafting your very own cocktails, providing all of the fresh ingredients and bar tools you’ll need.
                </p>
                <p>
                  Expert instruction from my years behind a bar will help you learn how to mix like a pro, with some tips and tricks along the way. We explore old and new drinks, and share the history of what makes the drink special and timeless. Show up open to new things and ready to have a good time!
                </p>
                <p>
                  We explore old and new drinks, and share the history of what makes the drink special and timeless. Show up open to new things and ready to have a good time!
                </p>
              </div>
              <div className={classNames(styles.primaryPhoto, styles.column, styles.column12, styles.column6Tablet, styles.column5Desktop, styles.right)}>
                <Frame width="100%"
                  height="40rem"
                  backgroundImage="url(http://localhost:8000/images/pages/booking/primary.png)"
                  backgroundSize="cover"
                  backgroundPosition="65% 0"
                  accent="http://localhost:8000/images/pages/booking/accent.png"
                  accentStyle={{bottom: '-3rem', right: '-4rem', zoom: '.6'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
