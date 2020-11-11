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
            render={(props) => (
              <People {...props} astros={this.state.astros} />
            )}
          />
          <Route exact path="/number" component={Number} />
        </div>
      </Router>
    )
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros")
    .then(response => response.json())
    .then(data => {
      this.setState({astronauts: data.people})
    })
  }

}
