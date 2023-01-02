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
import ProductListPage from './include/ProductListPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cgv" element={<Cgv />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/" element={ <Home />}/>
          <Route path={'/products'} element={<ProductListPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
