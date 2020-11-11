import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super()
    this.state = {astronauts: []}
  }

  render() {
    return (
      <Router>
        <div>
          Hi
        </div>
      </Router>
    )
  }

}
