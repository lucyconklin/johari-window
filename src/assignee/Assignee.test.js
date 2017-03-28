import React from 'react';
import { shallow } from 'enzyme';
import Assignee from './Assignee';

describe('Assignee', () => {
  it('renders without crashing', () => {
    shallow(<Assignee />);
  });

  it('renders name of assignee as a link', () => {
    const wrapper = shallow(<Assignee name='Stannis Baratheon'/>);
    const name = <a href="/">Stannis Baratheon</a>;

    expect(wrapper.contains(name)).toEqual(true);
  });
})
