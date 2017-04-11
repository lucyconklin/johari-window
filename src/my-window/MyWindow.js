import React, { Component } from 'react';
import './MyWindow.css';
import MyWindowAdjective from '../my-window-adjective/MyWindowAdjective'

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
    fetch('https://johariwindowapi.herokuapp.com/api/v1/users/150/descriptions')
      .then(result => result.json() )
      .then(data => {

        this.setState({
          myWindow: {
            arena: data['arena'],
            facade: data['facade'],
            blindSpot: data['blind-spot'],
            unknown: data['unknown']
          }}
        )
        return true
      })
  }

  render() {

    const arenaAdjectiveList = this.state.myWindow.arena.map((adjective, i) => {
      return <MyWindowAdjective key={i} name={adjective.name} frequency={adjective.frequency} />
    })

    const blindSpotAdjectiveList = this.state.myWindow.blindSpot.map((adjective, i) => {
      return <MyWindowAdjective key={i} name={adjective.name} frequency={adjective.frequency} />
    })

    const facadeAdjectiveList = this.state.myWindow.facade.map((adjective, i) => {
      return <MyWindowAdjective key={i} name={adjective.name} frequency={adjective.frequency} />
    })

    const unKnownAdjectiveList = this.state.myWindow.unknown.map((adjective, i) => {
      return <MyWindowAdjective key={i} name={adjective.name} frequency={adjective.frequency} />
    })

    return (
      <div className='MyWindow'>
        <h2>My Window</h2>
        <div className='johari-window'>
          <table>
            <tbody>
              <tr>
                <td className="johari-windowpane-title">
                <h4>Arena</h4>
                { arenaAdjectiveList }
                </td>
                <td className="johari-windowpane-title">
                <h4>Blind Spot</h4>
                { blindSpotAdjectiveList }</td>
              </tr>
              <tr>
                <td className="johari-windowpane-title">
                <h4>Fa&#231;ade</h4>
                { facadeAdjectiveList }</td>
                <td className="johari-windowpane-title">
                  <h4>Unknown</h4>
                  { unKnownAdjectiveList }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default MyWindow;
