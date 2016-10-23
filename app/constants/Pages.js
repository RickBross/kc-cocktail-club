export default {
  HOME: {
    linkTo: '/'
  },
  RECIPES: {
    linkTo: '/recipes',
    RECIPELIST: {
      linkTo: '/recipes/:alcohol',
      RECIPE: {
        linkTo: '/recipes/:alcohol/:recipe'
      },
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
