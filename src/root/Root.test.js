import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

describe('Root', () => {
  it('renders without crashing', () => {
    shallow(<Root />);
  });

  it('renders johari window title', () => {
    const wrapper = shallow(<Root />);
    const welcome = <h2>Johari Window</h2>;

    expect(wrapper.contains(welcome)).toEqual(true);
  });
})