import React from 'react/addons';
import BasicPage from '../BasicPage.jsx';
import { expect } from 'chai';

let { TestUtils } = React.addons;

describe('BasicPage', () => {
  it('Should have the correct footer element', () => {
    let footer = TestUtils.renderIntoDocument(
      <BasicPage />
    );
    let footerElem = React.findDOMNode(footer);
    expect(footerElem.tagName.toLowerCase()).to.equal('footer');
  });
});
