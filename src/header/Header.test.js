import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  })

  it('renders the users name', () => {
    const user = {name: "Olenna Tyrell", github: "revengeissweet", id: 1, token: "1", cohort: 1 }
    const auth = "auth"

    const wrapper = shallow(<Header user={user} auth={auth}/>)
    console.log(wrapper.props.user)
    expect(wrapper.find('.Header').length).toEqual(1);
  })
})
