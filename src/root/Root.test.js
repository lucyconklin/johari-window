import React from 'react';
import { shallow, mount } from 'enzyme';
import Root from './Root';

describe('Root', () => {
  it('renders without crashing', () => {
    shallow(<Root />);
  });

  it('renders assignee list and header components', () => {
    const wrapper = mount(<Root />);

    expect(wrapper.find('.AssigneeList').length).toEqual(1)
    expect(wrapper.find('.Header').length).toEqual(1)
  });
})
