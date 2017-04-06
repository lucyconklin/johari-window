import React, { Component } from 'react';
import './MyWindow.css';

class MyWindow extends Component {
  constructor() {
    super();
    this.state = { myWindow: {
      arena: [],
      facade: [],
      blindSpot: [],
      unknown: []
    } };

    this.getMyWindow = this.getMyWindow.bind(this);
  }

  componentDidMount() {
    this.getMyWindow()
  }

  getMyWindow () {
    fetch('https://johariwindowapi.herokuapp.com/api/v1/users/1/descriptions')
      .then(result => result.json() )
      .then(data => {
        this.state.myWindow['arena'] = data['arena']
        this.state.myWindow['facade'] = data['facade']
        this.state.myWindow['blindSpot'] = data['blind-spot']
        this.state.myWindow['unknown'] = data['unknown']
        this.setState( this.state )
        return true
      })
  }

  render() {
    return (
      <div className='MyWindow'>
        <h2>My Window</h2>
        <div className='johari-window'>
          <table>
          <tbody>
            <tr>
              <td className="johari-windowpane-title">Arena</td>
              <td className="johari-windowpane-title">Blind Spot</td>
            </tr>
            <tr>
              <td className="johari-windowpane-title">Fa&#231;ade</td>
              <td className="johari-windowpane-title">Unknown</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default MyWindow;
