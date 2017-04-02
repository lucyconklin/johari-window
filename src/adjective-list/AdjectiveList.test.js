import React from 'react';
import { shallow, mount } from 'enzyme';
import AdjectiveList from './AdjectiveList';
import Adjective from '../adjective/Adjective';

global.localStorage = {}

describe('AdjectiveList', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AdjectiveList />)
  })

  it('renders adjective components based on state', () => {
    const assignedAdjectives = ['religious', 'happy', 'brave'];    wrapper.setState({ adjectives: assignedAdjectives })

    expect(wrapper.find('.Adjective').length).toEqual(assignedAdjectives.length)
  });
})
