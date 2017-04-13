import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

describe('Main', () => {

  let wrapper;

  beforeEach(() => {
    const user = {name: "Olenna Tyrell", github: "revengeissweet", id: 1, token: "1", cohort: 1 }
    const auth = "auth"
    wrapper = mount(<Router><Main user={user} auth={auth} /></Router>)
  })

  it('renders assignee list and header components', () => {

    expect(wrapper.find('.AssigneeList').length).toEqual(1)
    expect(wrapper.find('.Header').length).toEqual(1)
  });
})
