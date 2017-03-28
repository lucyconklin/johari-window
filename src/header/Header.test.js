import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  })

  it('renders the users name', () => {
    const name = 'Stannis Baratheon';
    const wrapper = shallow(<Header />);
    wrapper.setState({ name: name })
    const htmlName = <h3>Stannis Baratheon</h3>;

    expect(wrapper.contains(htmlName)).toEqual(true);
  })
})
