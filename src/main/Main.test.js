import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  it('renders without crashing', () => {
    shallow(<Main />);
  });

  it('renders assignee list and header components', () => {
    const wrapper = mount(<Main />);

    expect(wrapper.find('.AssigneeList').length).toEqual(1)
    expect(wrapper.find('.Header').length).toEqual(1)
  });
})
