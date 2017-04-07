import React from 'react';
import { shallow, mount } from 'enzyme';
import MyWindow from './MyWindow';

describe('MyWindow', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<MyWindow />))

  it('renders without crashing', () => {
    expect(wrapper.find('.MyWindow').length).toEqual(1)
  })

  it('renders window table data', () => {
    expect(wrapper.find('td').length).toEqual(4)
  })

  it('renders adjectives in window', () => {
    expect(wrapper.find('.johari-window').length).toEqual(1)
  })
})
