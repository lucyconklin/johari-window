import React from 'react';
import { shallow, mount } from 'enzyme';
import AssigneeList from './AssigneeList';
import Assignee from '../assignee/Assignee';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AssigneeList', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Router><AssigneeList /></Router>)
  })

  it('renders without crashing', () => {});
})
