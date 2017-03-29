import React from 'react';
import { mount } from 'enzyme';
import Assignee from './Assignee';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Assignee', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Router><Assignee name='Stannis Baratheon' /></Router>)
  })
  
  it('renders name of assignee as a link', () => {

    expect(wrapper.find('a').length).toEqual(1)
  })
})
