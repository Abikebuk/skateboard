import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import './App.css'
import Home from './products/Home'
import Cgv from './include/Cgv'
import Inscription from './include/Inscription'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/" element={ <Home />}/>
        {/*<Route path="/panier" element={ <Panier />}/>*/}
        </Routes>
      </Router>
    </div>
  )
}

export default App
