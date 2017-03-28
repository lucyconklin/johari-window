import React from 'react';
import { shallow, mount } from 'enzyme';
import AdjectiveList from './AdjectiveList';
import Adjective from '../adjective/Adjective';

describe('AdjectiveList', () => {
  it('renders without crashing', () => {
    shallow(<AdjectiveList />);
  });

  it('renders adjective components based on state', () => {
    const assignedAdjectives = ['religious', 'happy', 'brave']
    const wrapper = mount(<AdjectiveList/>);
    wrapper.setState({ adjectives: assignedAdjectives })

    expect(wrapper.find('.Adjective').length).toEqual(assignedAdjectives.length)
  });

  it('renders directions', () => {
    const wrapper = shallow(<AdjectiveList/>);

    expect(wrapper.find('.directions').length).toEqual(1)
  })
})
