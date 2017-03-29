import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

describe('Main', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Router><Main /></Router>)
  })

  it('renders assignee list and header components', () => {

    expect(wrapper.find('.AssigneeList').length).toEqual(1)
    expect(wrapper.find('.Header').length).toEqual(1)
  });
})
