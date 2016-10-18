import pkg from '../../package';

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = 'KC Cocktail Club';
export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
export const ITEMS_GET_ERROR = 'ITEMS_GET_ERROR';
export const ITEMS_UPDATED = 'ITEMS_UPDATED';

export const MENU_UPDATED = 'MENU_UPDATED';

export const MENU_ITEMS = [
  {
    caption: 'Discover the',
    title: 'Club',
    linkTo: '/'
  },
  {
    caption: 'View the',
    title: 'Recipes',
    linkTo: '/recipes'
  },
  {
    caption: 'Previous Cocktail Club',
    title: 'Meetings',
    linkTo: '/events'
  },
  {
    caption: 'Purchase',
    title: 'Tickets',
    linkTo: '/purchase-tickets'
  },
  {
    caption: 'Book a private',
    title: 'Event',
    linkTo: '/book-an-event'
  },
];
