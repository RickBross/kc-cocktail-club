export default {
  WHISKEY: {},
  VODKA: {},
  GIN: {},
  RUM: {
    recipes: [
      {
        name: 'Caipirinha',
        alcohol: 'rum',
        linkTo: '/caipirinha',
        ingredients: [
          {
            quantity: '.5oz',
            title: 'Fresh Lemon Juice'
          },
          {
            quantity: '3ds',
            title: 'Angonstura Bitters'
          },
          {
            quantity: '2oz',
            title: 'Bourbon'
          },
          {
            quantity: '.5oz',
            title: 'Elderflower Liqueur'
          },
          {
            quantity: 'Splash',
            title: 'Club Soda'
          },
          {
            quantity: 'Garnish',
            title: 'Lemon Wheel'
          }
        ],
      },
      {
        name: 'Dark and Stormy',
        linkTo: '/dark-and-stormy',
        ingredients: [
          {
            quantity: '.5oz',
            title: 'Fresh Lemon Juice'
          },
          {
            quantity: '3ds',
            title: 'Angonstura Bitters'
          },
          {
            quantity: '2oz',
            title: 'Bourbon'
          },
          {
            quantity: '.5oz',
            title: 'Elderflower Liqueur'
          },
          {
            quantity: 'Splash',
            title: 'Club Soda'
          },
          {
            quantity: 'Garnish',
            title: 'Lemon Wheel'
          }
        ],
      },
      {
        name: 'Centenario',
        alcohol: 'rum',
        linkTo: '/centenario'
      },
      {
        name: 'Acapulco',
        alcohol: 'rum',
        linkTo: '/acapulco'
      },
      {
        name: 'Atlantic Breeze',
        alcohol: 'rum',
        linkTo: '/atlantic-breeze'
      },
      {
        name: 'Death In The Gulf Stream',
        alcohol: 'rum',
        linkTo: '/death-in-the-gulf-stream'
      }
    ]
  },
  TEQUILA: {},
};
