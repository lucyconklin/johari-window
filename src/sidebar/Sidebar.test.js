import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthService from '../utils/AuthService'


describe('Sidebar', () => {

  let wrapper;

  beforeEach(() => {
    const user = {name: "Olenna Tyrell", github: "revengeissweet", id: 1, token: "1", cohort: 1 }
    const auth = new AuthService('','')
    wrapper = render (<Router><Sidebar user={user} auth={auth} /></Router>)
  })

  it('renders sidebar links', () => {

    expect(wrapper.find('.sidebar-links').length).toEqual(1)
    expect(wrapper.find('.sidebar-links').children().length).toEqual(3)
  })

  it('renders the text johari window', () => {

    expect(wrapper.find('.sidebar-header').length).toEqual(1)
  })
})
