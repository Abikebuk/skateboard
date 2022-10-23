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
          <div className={'container-fluid p-0'}>
            <div className={'row p-0 m-0'}>
              <div className={'col-auto p-0'}>
                <Navi />
              </div>
              <div id={'content'} className={'col p-0'}>
                <Head ></Head>
                <Home />
              </div>
            </div>
          </div>
    )
  }
}

export default First
