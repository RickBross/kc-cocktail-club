import React from 'react/addons';
import Page from '../Page.jsx';
import { expect } from 'chai';

let { TestUtils } = React.addons;

describe('Page', () => {
  it('Should have the correct footer element', () => {
    let footer = TestUtils.renderIntoDocument(
      <Page />
    );
    let footerElem = React.findDOMNode(footer);
    expect(footerElem.tagName.toLowerCase()).to.equal('footer');
  });
});
