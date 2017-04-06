import React, { Component } from 'react';
import './MyWindow.css';

class MyWindow extends Component {
  constructor() {
    super();
    this.state = { myWindow: [] };

    this.getMyWindow = this.getMyWindow.bind(this);
  }

  componentDidMount() {
    this.getMyWindow()
  }

  getMyWindow () {
    fetch('/')
      .then(result => result.json())
      .then(data => {
        this.setState({ myWindow: data })
        localStorage.setItem('myWindow', data)
        return true
      })
  }

  render() {
    return (
      <div className='MyWindow'>
        <h2>My Window</h2>
        <div className='johari-window'>
          <table>
          <th></th>
          <tr>
            <td className="johari-windowpane-title">Arena</td>
            <td className="johari-windowpane-title">Blind Spot</td>
          </tr>
          <tr>
            <td className="johari-windowpane-title">Fa&#231;ade</td>
            <td className="johari-windowpane-title">Unknown</td>
          </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default MyWindow;
