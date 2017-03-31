import React from 'react';
import { shallow, mount } from 'enzyme';
import JohariSubmit from './JohariSubmit';
import { BrowserRouter as Router } from 'react-router-dom';


describe('JohariSubmit', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<Router><JohariSubmit ready={true} /></Router>))

   it('renders without crashing', () => {

  })
})
