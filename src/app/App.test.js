import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthService from '../utils/AuthService'

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    const user = {name: "Olenna Tyrell", github: "revengeissweet", id: 1, token: "1", cohort: 1 }
    const auth = new AuthService('','')
    wrapper = mount(<Router><App user={user} auth={auth}/></Router>)
  })

  it('renders sidebar', () => {
    expect(wrapper.find('.Sidebar').length).toEqual(1)
  })
})
