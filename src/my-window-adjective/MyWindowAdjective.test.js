import React from 'react';
import { shallow, mount } from 'enzyme';
import MyWindowAdjective from './MyWindowAdjective';

describe('MyWindowAdjective', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<MyWindowAdjective />))

  it('renders without crashing', () => {
    expect(wrapper.find('.MyWindowAdjective').length).toEqual(1)
  })

  it('renders an adjective', () => {
    expect(wrapper.find('.johari-window-adjective').length).toEqual(1)
  })
})
