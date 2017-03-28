import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders sidebar', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('.Sidebar').length).toEqual(1)
  })

  it('renders main by default', () => {
    const wrapper = mount(<App />);
    wrapper.setState( { onMain: true, onJohari: false });

    expect(wrapper.find('.Main').length).toEqual(1)
    expect(wrapper.find('.Johari').length).toEqual(0)
  })

  it('renders Johari based on state', () => {
    const wrapper = mount(<App />);
    wrapper.setState( { onMain: false, onJohari: true });

    // expect(wrapper.find('.Johari').length).toEqual(1)
    expect(wrapper.find('.Main').length).toEqual(0)
  })
})
