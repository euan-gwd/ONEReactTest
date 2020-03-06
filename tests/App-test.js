import React from 'react';
import expect from 'expect';
import { render, unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';

import App from 'src/components/App';

describe('App component', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  test('should render as expected', () => {
    const wrapper = shallow(<App />);
    console.info(wrapper.debug());
  });
});
s;
