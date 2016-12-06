import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import RevealPage from '../components/Pages/RevealPage';

import Frame from '../UI/Frame/Frame';
import AlcoholFooter from '../UI/footers/AlcoholFooter/AlcoholFooter';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import styles from './_Booking.scss';


export default class Booking extends React.Component {


  componentWillMount() {
    AppStore.setProps({tone:'light'});
    MenuStore.setProps({tone:'light'});
  }


  componentDidMount() {
    document.title = "Private Events - Kansas City Cocktail Club";

    const bg = 'white'
    MenuStore.setProps({title:'Discover'});

    AppStore.setProps({backgroundColor:bg});
    AppStore.setProps({backgroundImage:'none'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});
  }

  render() {

    return (
      <RevealPage>
        <div className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"], styles.booking)}>
          <div className={classNames(styles.container)}>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet, styles.column7Desktop)}>
                <div className={classNames(styles.pageHeading)}>
                  <h6>Private Events</h6>
                  <h1>A happy hour the whole team can get behind</h1>
                </div>
                <p>
                  Cocktail Club is a monthly gathering of people who love to drink and love to learn. We provide a fun atmosphere to begin crafting your very own cocktails, providing all of the fresh ingredients and bar tools you’ll need.
                </p>
                <p>
                  Expert instruction from my years behind a bar will help you learn how to mix like a pro, with some tips and tricks along the way. We explore old and new drinks, and share the history of what makes the drink special and timeless. Show up open to new things and ready to have a good time!
                </p>
                <p>
                  We explore old and new drinks, and share the history of what makes the drink special and timeless. Show up open to new things and ready to have a good time!
                </p>
                <br />
                <form>
                  <div>
                    <div className={classNames(styles.column, styles.column12)}>
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className={classNames(styles.column, styles.column12)}>
                      <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className={classNames(styles.column, styles.column12, styles.column6Desktop)}>
                      <input type="text" name="guests_quantity" placeholder="# of Guests" />
                    </div>
                    <div className={classNames(styles.column, styles.column12, styles.column6Desktop)}>
                      <input type="text" name="date" placeholder="Date of Events" />
                    </div>
                  </div>
                  <br />
                  <div className={classNames(styles.column, styles.column12)}>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div className={classNames(styles.primaryPhoto, styles.column, styles.column12, styles.column6Tablet, styles.column5Desktop, styles.right)}>
                <Frame width="100%"
                  classNames={[styles.primaryFrame]}
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
        <AlcoholFooter alcohol="rum" classNames={classNames(styles.tac, styles.darkTone)}>

        </AlcoholFooter>
      </RevealPage>
    );
  }
}
