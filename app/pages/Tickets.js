import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import Frame from '../UI/Frame/Frame';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import styles from './_Tickets.scss';


export default class Tickets extends React.Component {


  componentDidMount() {
    document.title = "Pricing Options - Kansas City Cocktail Club";

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
      <div className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"], styles.tickets)}>
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.column, styles.column12, styles.column6Tablet, styles.column7Desktop)}>
                <h6>How much does it cost...</h6>
                <h1>Pricing Options</h1>
                <p>
                  We try to put on the best event possible for you, from the recipe cards to the locations we have our events at. Everything you will need, from glassware to alcohol and garnishes, will be prepared and ready for you to use. We want everyone to enjoy the pleasures of crafting your own cocktail so to keep the costs down we do not run this event for a profit. All the money goes back into the event to continue to make this a great event all can attend and enjoy.
                </p>
                <p>
                  We’ve created two packages that we think will serve everyone. If you have any questions, reach out to us at <a href="mailto:hi@kccocktailclub.com">hi@kccocktailclub.com</a>. Please keep in mind that we sell tickets a month in advance. This means that any tickets you buy this month will be for the event occuring in the following month. Once the event reaches its max capacity, we’ll begin selling for the next event. Tickets can go fast so get yours today! You will recieve an email confirmation with details for your event as well as your ticket. Bring a printed copy of this or have it ready on your phone, as you will need it for admission.
                </p>
              </div>
              <div className={classNames(styles.primaryPhoto, styles.column, styles.column12, styles.column6Tablet, styles.column5Desktop, styles.right)}>
                <Frame width="100%"
                  height="30rem"
                  backgroundImage="url(http://localhost:8000/images/pages/tickets/primary.png)"
                  backgroundSize="cover"
                  backgroundPosition="65% 0" />
              </div>
            </div>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.column, styles.column12)}>
                <h6>Currently selling tickets for</h6>
                <h2>January 7, 2017, 7:30pm</h2>
              </div>
            </div>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.paymentOption, styles.column,styles.column12,styles.column4Tablet)}>
                <h1>$30</h1><span>Single Pass</span>
                <p>
                  This single pass will grant you access to Meeting #7 on January 25th, 2017. Multiple passes can be purchased as long as the capacity has not been reached.
                </p>
                <button>Purchase</button>
              </div>
              <div className={classNames(styles.paymentOption, styles.column,styles.column12,styles.column4Tablet)}>
                <h1>$25</h1><span>Membership</span>
                <p>
                  The Cocktail Club Membership gives you access to the next 5 events from January through May of 2017. You will recieive a 15% discount on each ticket, and the cost will be withdrawn on the first of each month.
                </p>
                <button>Purchase</button>
              </div>
              <div className={classNames(styles.paymentOption, styles.column,styles.column12,styles.column4Tablet)}>
                  <h6>All transactions processed with</h6>
                  <img  width="70px" src="http://localhost:8000/images/pages/tickets/stripe.png" />
                  <br /><br /><br />
                  <h6>Forms of payment accepted</h6>
                  <img  width="120px" src="http://localhost:8000/images/pages/tickets/payments.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
