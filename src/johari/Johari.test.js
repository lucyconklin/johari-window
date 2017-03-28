import React from 'react';
import { shallow, mount } from 'enzyme';
import Johari from './Johari';

describe('Johari', () => {
  it('renders without crashing', () => {
    shallow(<Johari />);
  });
})
