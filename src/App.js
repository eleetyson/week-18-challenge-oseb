import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Navbar from './Navbar'
import Number from './Number'
import People from './People'

export default class App extends Component {
  constructor() {
    super()
    this.state = {astronauts: []}
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
        </div>
      </Router>
    )
  }

}
