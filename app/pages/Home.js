import _ from 'lodash';
import React from 'react';
import classNames from 'classnames'

import RevealPage from '../components/Pages/RevealPage';

import styles from './_Home.scss';
import Menu from '../components/Menu/Menu';

import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

import AlcoholFooter from '../UI/footers/AlcoholFooter/AlcoholFooter';
import Frame from '../UI/Frame/Frame';
import Collage from '../UI/Collage/Collage';
import Video from '../UI/Video/Video';

export default class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      menuStyles: {
        position: 'fixed'
      },
      scrollBottom: window.height
    };
  }

  componentWillMount() {
    document.title = "Kansas City Cocktail Club";
    AppStore.setProps({backgroundImage:''});
    AppStore.setProps({backgroundColor:'white'});
    AppStore.setProps({backgroundSize:'cover'});
  }

  componentDidMount() {
    MenuStore.setProps({title:'Discover'});
    MenuStore.setProps({tone:'dark'});
  }

  componentWillMount() {
    document.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll.bind(this), false);
  }

  getViewport() {

     var viewPortWidth;
     var viewPortHeight;

     // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
     if (typeof window.innerWidth != 'undefined') {
       viewPortWidth = window.innerWidth,
       viewPortHeight = window.innerHeight
     }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
     else if (typeof document.documentElement != 'undefined'
     && typeof document.documentElement.clientWidth !=
     'undefined' && document.documentElement.clientWidth != 0) {
        viewPortWidth = document.documentElement.clientWidth,
        viewPortHeight = document.documentElement.clientHeight
     }

     // older versions of IE
     else {
       viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
       viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
     }
     return [viewPortWidth, viewPortHeight];
  }

  handleScroll() {
    var newState = _.merge(this.state, { menuStyles: { position: 'fixed' } });
    console.log(newState);
    var doc = document.documentElement;
    var viewport = this.getViewport();

    newState.left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    newState.top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    newState.right = (window.pageXOffset || doc.scrollRight) + viewport[0];
    newState.bottom = (window.pageYOffset || doc.scrollBottom) + viewport[1];

    if (newState.bottom > document.getElementsByClassName(styles.body)[0].clientHeight) {
      newState.menuStyles.position = 'absolute';
      newState.menuStyles.bottom = 0;
    }

    console.log(newState.right - newState.left);

    if (newState.top > document.getElementsByClassName(styles.videoBg)[0].clientHeight/2) {
      MenuStore.setProps({tone:'light'});
    } else {
      MenuStore.setProps({tone:'dark'});
    }

    this.setState(newState);
  }

  render() {
    return (
      <article className={classNames(styles.body, styles[AppStore.getProp('tone') + "Tone"])}>
        <Menu
          styles={this.state.menuStyles}
          title={MenuStore.getProp('title')}
          tone={MenuStore.getProp('tone')}
          active={MenuStore.getProp('active')}
        />
        <div className={classNames(styles.mainLayer)}>
          <div className={classNames(styles.body, styles.home)}>
            <div className={classNames(styles.videoBg)}>
              <div className={classNames(styles.logoWrapper)}>
                <img className={styles.homeLogo} src="./images/home-logo.png" />
              </div>
            </div>
            <div className={classNames(styles.container, styles.lightTone, styles.homeBelow)}>
              <div className={classNames(styles.row, styles.introduction)}>
                <div className={classNames(styles.column, styles.column12, styles.column6Tablet, styles.column8Desktop)}>
                  <div className={classNames(styles.pageHeading)}>
                    <h6>How it all started...</h6>
                    <h1>The Story Behind It All</h1>
                  </div>
                </div>
                <div className={classNames(styles.explore, styles.column, styles.column12, styles.column6Tablet, styles.column4Desktop, styles.right)}>
                  <span>Explore Cocktail Club #6 -></span>
                </div>
              </div>
              <Collage classNames={classNames(styles.row, styles.collage)} styles={{height: '23rem', 'paddingTop': 0}}>
                <p style={{width: '50%', postion: 'absolute', top:0, left: 0}}>Cocktail Club was born out of a desire to pull some of my greatest passions together in one fun event for my friends. I had bartended through school before I started designing full time. After a few years with an “adult job” I was missing the fun I had with mixing drinks every weekend. Cocktail Club came about from me trying to have some fun with friends and has grown from there.</p>
                <Frame width="33%"
                  height="50%"
                  backgroundImage={"url(http://localhost:8000/images/pages/events/1/frame-3.png)"}
                  backgroundSize="cover"
                  position="absolute"
                  left="2rem"
                  bottom="0"
                  margin='0 auto'
                  z='30'
                />
              <Frame width="45%"
                  height="70%"
                  backgroundImage={"url(http://localhost:8000/images/pages/events/1/frame-3.png)"}
                  backgroundSize="cover"
                  position="absolute"
                  right="0"
                  top="10%"
                  margin='0 auto'
                  z='20'
                />
              </Collage>
            </div>
            <div className={classNames(styles.video, styles.row)}>
              <div className={classNames(styles.column, styles.column12)}>
                <Video/>
              </div>
            </div>
          </div>
          <AlcoholFooter alcohol="rum" classNames={classNames(styles.tac, styles.darkTone)}>

          </AlcoholFooter>
        </div>
      </article>
    );
  }
}
