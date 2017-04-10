import React from 'react';
import { shallow, mount } from 'enzyme';
import Admin from './Admin';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Admin', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = mount(<Router><Admin /></Router>)
  })

  it('renders admin page with links of cohorts', () => {
    expect(wrapper.find('.Admin').length).toEqual(1)
    expect(wrapper.find('.cohort-list').length).toEqual(1)
  })
})
