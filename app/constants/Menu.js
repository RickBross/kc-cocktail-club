import ROUTES from './Routes';

export default [
  {
    caption: 'Discover the',
    title: 'Club',
    linkTo: ROUTES.HOME.linkTo
  },
  {
    caption: 'View the',
    title: 'Recipes',
    linkTo: ROUTES.RECIPES.linkTo
  },
  {
    caption: 'Previous Cocktail Club',
    title: 'Meetings',
    linkTo: ROUTES.EVENTS.linkTo
  },
  {
    caption: 'Purchase',
    title: 'Tickets',
    linkTo: ROUTES.TICKETS.linkTo
  },
  {
    caption: 'Book a private',
    title: 'Event',
    linkTo: ROUTES.BOOKING.linkTo
  },
];
