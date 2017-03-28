import React from 'react';
import { shallow, mount } from 'enzyme';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders without crashing', () => {
    shallow(<Sidebar />);
  });

  it('renders sidebar links', () => {
    const wrapper = mount(<Sidebar />);
    const assignmentLink = <a>Assignments</a>
    const windowLink = <a>My Window</a>

    expect(wrapper.contains(assignmentLink)).toEqual(true)
    expect(wrapper.contains(windowLink)).toEqual(true)
  });

  it('renders the text johari window', () => {
    const wrapper = mount(<Sidebar />);
    const text = <h3>Johari Window</h3>

    expect(wrapper.contains(text)).toEqual(true)
  });
})
