import First from './products/First'

import * as url from './include/var.js'
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Navi from './include/Navi'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route
          path="/"
          element={
            <First />
          }
        />

      </Routes>
      </Router>
    </div>
  )
}

export default App
