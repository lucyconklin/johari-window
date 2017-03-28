import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  })

  it('renders johari window title', () => {
    const wrapper = shallow(<Header />);
    const welcome = <h2>Johari Window</h2>;

    expect(wrapper.contains(welcome)).toEqual(true);
  })

  it('fetches the users name', () => {
    
  })

  it('renders the users name', () => {
    const wrapper = shallow(<Header name='Stannis Baratheon'/>);
    const name = <h3>Stannis Baratheon</h3>;

    expect(wrapper.contains(name)).toEqual(true);
  })
})