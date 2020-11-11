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
    this.state = {astros: []}
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route
            exact path="/people"
            render={ () => <People astros={this.state.astros} /> }
          />
          <Route
            exact path="/number"
            render={ () => <Number astros={this.state.astros} /> }
          />
        </div>
      </Router>
    )
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => {
      this.setState({astros: data.people})
    })
  }

}
