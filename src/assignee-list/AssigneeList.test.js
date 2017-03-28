import React from 'react';
import { shallow, mount } from 'enzyme';
import AssigneeList from './AssigneeList';
import Assignee from '../assignee/Assignee';

describe('AssigneeList', () => {
  it('renders without crashing', () => {
    shallow(<AssigneeList />);
  });

  it('renders assignee components based on state', () => {
    const assignedUsers = ['Kyle', 'Lucy', 'Drew', 'Amy', 'Annie']
    const wrapper = mount(<AssigneeList/>);
    wrapper.setState({ assignees: assignedUsers })

    expect(wrapper.find('.Assignee').length).toEqual(assignedUsers.length)
  });
})
