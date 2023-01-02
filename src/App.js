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
import Connexion from './include/Connexion'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cgv" element={<Cgv />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/" element={ <Home />}/>
          <Route path={'/products'} element={<ProductListPage/>}/>
          {/* <Route path="/panier" element={ <Panier />}/>*/}
          <Route path="/inscription" element={ <Inscription />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
