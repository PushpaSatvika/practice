import React, { Component } from 'react'
import "./App.css";
import State from './component/state'
import Props from './component/props'
import Funprop  from './component/funprop'
export default class App extends Component {
  styles={
    fontStyle:"bold",
    color:"Blue"
  }
  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <State/>
        <Props name="Satvika" place="guntur"><p>this is child component</p></Props>
        <Funprop name="pushpa"></Funprop>
      </div>
    )
  }
}
