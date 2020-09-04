import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home'
import Soldier from './components/soldier'

let baseUrl = 'http://localhost:3003'

  export default class App extends Component {
    state = {
      clients: []
    }
    
  render() {
    return (
      <BrowserRouter>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/soldiers" component={Soldier} />
        </Switch>
      </BrowserRouter>
    )
  }
}
