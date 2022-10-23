import React, { Component } from 'react'
import Navi from '../include/Navi'
import Foot from '../include/Foot'
import Head from '../include/Head'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom"
import Home from '../Home/Home';



class First extends Component {
  render() {
    return (
      <div>
        <div className="scren__size">
          <Head />
          <Navi />
          <Home />
          {/* <Grid /> */}
        </div>
        <Foot />
      </div>
    )
  }
}

export default First
