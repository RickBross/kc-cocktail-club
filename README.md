# KC Cocktail Club SPA

[![React-seed Build Status](https://travis-ci.org/badsyntax/react-seed.svg?branch=master)](https://travis-ci.org/badsyntax/react-seed)

## Getting started

### Installing with git

```bash
git clone --depth=1 https://github.com/RickBross/kc-cocktail-club kc-cocktail-club
```

## npm scripts

* `npm start` - Build and start the app in dev mode at http://localhost:8000
* `npm test` - Run the tests
* `npm run build` - Run a production build

### Writing components:

```js
// Filename: Menu.jsx

'use strict';

import styles from './_Menu.scss';
import React from 'react';
import MenuItem from './MenuItem';

let { Component, PropTypes } = React;

export default class Menu extends Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ul className={styles.menu}>
        {this.props.items.map((item) => {
          return (<MenuItem item={item} />);
        }, this)}
      </ul>
    );
  }
}
```

###Writing tests:

```js
// Filename: __tests__/Menu-test.jsx

'use strict';

import React from 'react/addons';
import { expect } from 'chai';

import Menu from '../Menu.jsx';
import MenuItem from '../MenuItem.jsx';

// Here we create a mocked MenuItem component.
class MockedMenuItem extends MenuItem {
  render() {
    return (
      <li className={'mocked-menu-item'}>{this.props.item.label}</li>
    );
  }
}

// Here we set the mocked MenuItem component.
Menu.__Rewire__('MenuItem', MockedMenuItem);

describe('Menu', () => {

  let { TestUtils } = React.addons;

  let menuItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' }
  ];

  let menu = TestUtils.renderIntoDocument(
    <Menu items={menuItems} />
  );
  let menuElem = React.findDOMNode(menu);
  let items = menuElem.querySelectorAll('li');

  it('Should render the menu items', () => {
    expect(items.length).to.equal(2);
  });

  it('Should render the menu item labels', () => {
    Array.prototype.forEach.call(items, (item, i) => {
      expect(item.textContent.trim()).to.equal(menuItems[i].label);
    });
  })

  it('Should render the mocked menu item', () => {
    expect(items[0].className).to.equal('mocked-menu-item');
  });
});

```

## HTML files

All required `.html` files are compiled with lodash.template and synced into the `./build` directory:

```js
// Filename: app.jsx
import './index.html';
```

* You can adjust the lodash template data in the `webpack/loaders.js` file.

## Conventions

* Use fat arrows for anonymous functions
* Don't use `var`. Use `let` and `const`.

## Releasing

1. `npm version patch`
2. `git push --follow-tags`
3. `npm login` (Optional)
4. `npm publish`

## Developers

1. Rick Bross (![@RickBross](https://github.com/RickBross/))
