import React from 'react';
import { shallow, mount } from 'enzyme';
import Johari from './Johari';
import AuthService from '../utils/AuthService'
import { BrowserRouter as Router } from 'react-router-dom';

global.localStorage = {}

describe('Johari', () => {

  let wrapper;

  beforeEach(() => {
    const user = {name: "Olenna Tyrell", github: "revengeissweet", id: 1, token: "1", cohort: 1 }
    wrapper = mount(<Router><Johari user={user} /></Router>)
  })

   it('renders directions', () => {

    expect(wrapper.find('.directions').length).toEqual(1)
  })

   it('renders title', () => {

    expect(wrapper.find('.johari-title').length).toEqual(1)
  })

   it('renders a cancel button', () => {

    expect(wrapper.find('.johari-cancel').length).toEqual(1)
  })

   it('renders a johari submit button', () => {

    expect(wrapper.find('.JohariSubmit').length).toEqual(1)
  })
})
