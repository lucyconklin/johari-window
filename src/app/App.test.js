import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Router><App /></Router>)
  })

  it('renders sidebar', () => {

    expect(wrapper.find('.Sidebar').length).toEqual(1)
  })

  it('renders main by default', () => {

    expect(wrapper.find('.Main').length).toEqual(1)
    expect(wrapper.find('.Johari').length).toEqual(0)
  })
})
