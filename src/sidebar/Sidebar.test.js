import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Sidebar', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Router><Sidebar /></Router>)
  })

  it('renders sidebar links', () => {

    expect(wrapper.find('.sidebar-links').length).toEqual(1)
    expect(wrapper.find('.sidebar-links').children().length).toEqual(3)
  })

  it('renders the text johari window', () => {

    expect(wrapper.find('.sidebar-header').length).toEqual(1)
  })
})
