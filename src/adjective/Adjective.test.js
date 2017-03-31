import React from 'react';
import { shallow, mount } from 'enzyme';
import Adjective from './Adjective';

describe('Adjective', () => {
  it('renders without crashing', () => {
    shallow(<Adjective />);
  })

  it('renders as a checkbox', () => {
    const wrapper = shallow(<Adjective name='religious' />);
    const checkbox = <input type="checkbox" id="religious" />;

    expect(wrapper.find('input').length).toEqual(1)
  })
})
