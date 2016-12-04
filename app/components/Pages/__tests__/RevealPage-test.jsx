import React from 'react/addons';
import RevealPage from '../RevealPage.jsx';
import { expect } from 'chai';

let { TestUtils } = React.addons;

describe('RevealPage', () => {
  it('Should have the correct footer element', () => {
    let footer = TestUtils.renderIntoDocument(
      <RevealPage />
    );
    let footerElem = React.findDOMNode(footer);
    expect(footerElem.tagName.toLowerCase()).to.equal('footer');
  });
});
