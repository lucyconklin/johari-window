import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from './NoMatch';

describe('NoMatch', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<NoMatch />))

  it('renders no match', () => {

    expect(wrapper.find('.NoMatch').length).toEqual(1)
  })
})
