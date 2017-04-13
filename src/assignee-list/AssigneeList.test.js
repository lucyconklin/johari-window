import React from 'react';
import { shallow, mount } from 'enzyme';
import AssigneeList from './AssigneeList';
import Assignee from '../assignee/Assignee';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AssigneeList', () => {

  let wrapper;

  beforeEach(() => {
    const user = {name: "Olenna Tyrell", github: "revengeissweet", id: 1, token: "1", cohort: 1 }
    const auth = "auth"
    wrapper = mount(<Router><AssigneeList user={user} auth={auth} /></Router>)
  })

  it('renders without crashing', () => {});
})
