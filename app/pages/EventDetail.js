import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames'

import Menu from '../components/Menu/Menu';
import Frame from '../UI/Frame/Frame';
import Video from '../UI/Video/Video';
import GhostHeader from '../UI/GhostHeader/GhostHeader';
import DrinkSlideshow from '../UI/DrinkSlideshow/DrinkSlideshow';
import RevealFooter from '../UI/RevealFooter/RevealFooter';
import RecipeFooter from '../UI/footers/RecipeFooter/RecipeFooter';
import PageAccent from '../UI/PageAccent/PageAccent';
import List from '../UI/List/List';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import {
  ROUTES,
  ALCOHOL,
  EVENTS,
} from '../constants/AppConstants';

import styles from './_EventDetail.scss';

let eventNumber, eventIndex, eventData, eventDate, eventAddress, eventAttendees, eventDrinks;

export default class EventDetail extends React.Component {


    componentWillMount() {

    const bg = 'white'
    AppStore.setProps({tone:'light'});
    MenuStore.setProps({title:'Discover'});

    AppStore.setProps({backgroundColor:bg});
    AppStore.setProps({backgroundImage:'none'});
    AppStore.setProps({backgroundSize:'auto 100%'});
    AppStore.setProps({backgroundPosition:'0 0'});

    eventNumber = this.props.params.event;
    eventIndex = parseInt(eventNumber)-1;
    eventData = EVENTS[eventIndex];
    eventDate = eventData.date;
    eventAddress = eventData.address;
    eventAttendees = eventData.attendees;
    eventDrinks = eventData.drinks;

    document.title = "Meeting #" + eventNumber + " - Kansas City Cocktail Club";
  }

  render() {
    return (
      <div>
        <div className={classNames(styles.mainLayer)}>
          <Menu
            title={MenuStore.getProp('title')}
            tone={AppStore.getProp('tone')}
            active={MenuStore.getProp('active')}
          />
          <div className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"], styles.booking)}>
            <div className={classNames(styles.container)}>
              <div className={classNames(styles.row)}>
                <div className={classNames(styles.eventDescription, styles.column, styles.column12, styles.column7Desktop)}>
                  <Link to={ROUTES.EVENTS.linkTo}><h6>&laquo; Back to Meetings</h6></Link>
                  <div className={classNames(styles.pageHeading)}>
                    <h1>Meeting #{eventNumber}</h1>
                    <h4>
                      {eventDate}<br/>
                      {eventAddress}
                    </h4>
                  </div>
                  <p className={classNames(styles.mediumParagraph)}>
                    Cocktail Club was born out of a desire to pull some of my greatest passions together in one fun event for my friends. I had bartended through school before I started designing full time. After a few years with an “adult job” I was missing the fun I had with mixing drinks every weekend. Cocktail Club came about from me trying to have some fun with friends and has grown from there.
                  </p>
                  <div className={classNames(styles.floatRow, styles.collage)} style={{height: '15rem'}}>
                    <Frame width="80%"
                      height="15rem"
                      backgroundImage={"url(http://localhost:8000/images/pages/events/" + eventNumber + "/frame-1.png)"}
                      backgroundSize="cover"
                      backgroundPosition="65% 0"
                      accent={"http://localhost:8000/images/pages/events/" + eventNumber + "/frame-1-accent.png"}
                      accentStyle={{bottom: '1.5rem', right: '-6.25rem', zIndex: '0'}}
                    />
                  </div>
                </div>
                <div className={classNames(styles.primaryPhoto, styles.column, styles.column12, styles.column5Desktop, styles.right)}>
                  <Frame width="100%"
                    height="27rem"
                    backgroundImage={"url(http://localhost:8000/images/pages/events/" + eventNumber + "/frame-2.png)"}
                    backgroundSize="cover"
                  />
                </div>
              </div>
              <div className={classNames(styles.drinkSlideshow, styles.row)}>
                <DrinkSlideshow
                  className={styles.frame, styles.center}
                  drinks={eventDrinks}
                ></DrinkSlideshow>
                <GhostHeader
                  classNames={[styles.drinksHeader]}
                  tone="light"
                  text="THE DRINKS"
                />
              </div>
              <div className={classNames(styles.collageTwo, styles.row)}>
                  <Frame width="45%"
                  height="50%"
                  backgroundImage={"url(http://localhost:8000/images/pages/events/" + eventNumber + "/frame-3.png)"}
                  backgroundSize="cover"
                  position="absolute"
                  left="27.5%"
                  top="0"
                  margin='0 auto'
                  z='30'
                />
              <Frame width="31%"
                  height="75%"
                  backgroundImage={"url(http://localhost:8000/images/pages/events/" + eventNumber + "/frame-4.png)"}
                  backgroundSize="cover"
                  position="absolute"
                  right="0"
                  bottom="0"
                  margin='0 auto'
                  z='40'
                />
                <Frame width="45%"
                  height="55%"
                  top="20%"
                  left="0"
                  backgroundImage={"url(http://localhost:8000/images/pages/events/" + eventNumber + "/frame-5.png)"}
                  backgroundSize="cover"
                  position="absolute"
                  margin='0 auto'
                  z='20'
                  accent={"http://localhost:8000/images/pages/events/" + eventNumber + "/frame-5-accent.png"}
                  accentStyle={{bottom: '-4rem', right: '-7rem', zIndex: '50'}}
                />
              </div>
              <div className={classNames(styles.video, styles.row)}>
                <div className={classNames(styles.column, styles.column12)}>
                  <Video/>
                  <GhostHeader
                    classNames={[styles.videoHeader]}
                    tone="light"
                    text="THE VIDEO"
                  />
                </div>
              </div>
              <div className={classNames(styles.attendees, styles.row)}>
                <div className={classNames(styles.column, styles.column12, styles.column6phoneLandscape)}>
                  <List
                    data={eventAttendees}
                    classNames={[styles.column]}
                    width="50%"
                  />
                  <GhostHeader
                    text="THE ATTENDEES"
                    classNames={[styles.attendeesHeader]}
                    tone="light"
                  />
                </div>
                <div className={classNames(styles.column, styles.column12, styles.column6phoneLandscape)}>
                  <Frame
                    backgroundImage={"url(http://localhost:8000/images/pages/events/" + eventNumber + "/frame-6.png)"}
                    backgroundSize="cover"
                    backgroundPosition="65% 0"
                    margin='0 auto'
                    classNames={[styles.frame, styles.listFrame]}
                  />
                </div>
              </div>
              <PageAccent
                img="http://localhost:8000/images/pages/events/page-accent.png"
              />
            </div>
          </div>
        </div>
        <RecipeFooter classNames={classNames(styles.tac, styles.darkTone)} />
      </div>
    );
  }
}
