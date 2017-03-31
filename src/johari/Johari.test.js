import React from 'react';
import { shallow, mount } from 'enzyme';
import Johari from './Johari';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Johari', () => {

  let wrapper;

  beforeEach(() => wrapper = mount(<Router><Johari /></Router>))

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
