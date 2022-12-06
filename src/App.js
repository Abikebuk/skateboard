import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import './App.css'
import Home from './products/Home'
import Cgv from './include/Cgv'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/cgv" element={<Cgv />} />
          <Route path="/" element={ <Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
