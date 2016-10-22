import pkg from '../../package';

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = 'KC Cocktail Club';
export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
export const ITEMS_GET_ERROR = 'ITEMS_GET_ERROR';
export const ITEMS_UPDATED = 'ITEMS_UPDATED';

export const APP_UPDATED = 'APP_UPDATED';

export const MENU_UPDATED = 'MENU_UPDATED';

export {default as RECIPES} from './Recipes.js'

export const PAGES = {
  HOME: {
    linkTo: '/'
  },
  RECIPES: {
    linkTo: '/recipes',
    RECIPE: {
      linkTo: '/recipes/:recipe'
    },
  },
  EVENTS: {
    linkTo: '/events'
  },
  TICKETS: {
    linkTo: '/purchase-tickets'
  },
  BOOKING: {
    linkTo: '/book-an-event'
  },
};

export const SOCIAL_ITEMS = [
  { title: "vimeo", href: "http://facebook.com/", img:"/images/vimeo.png"},
  { title: "facebook", href: "http://facebook.com/", img:"/images/facebook.png"},
  { title: "twitter", href: "http://facebook.com/", img:"/images/twitter.png"},
  { title: "instagram", href: "http://facebook.com/", img:"/images/instagram.png"},
];

export const MENU_ITEMS = [
  {
    caption: 'Discover the',
    title: 'Club',
    linkTo: PAGES.HOME.linkTo
  },
  {
    caption: 'View the',
    title: 'Recipes',
    linkTo: PAGES.RECIPES.linkTo
  },
  {
    caption: 'Previous Cocktail Club',
    title: 'Meetings',
    linkTo: PAGES.EVENTS.linkTo
  },
  {
    caption: 'Purchase',
    title: 'Tickets',
    linkTo: PAGES.TICKETS.linkTo
  },
  {
    caption: 'Book a private',
    title: 'Event',
    linkTo: PAGES.BOOKING.linkTo
  },
];
