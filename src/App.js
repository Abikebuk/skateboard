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
import ProductPage from './include/ProductPage'
import Content from './include/Content'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cgv" element={<Cgv />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/" element={ <Home />}/>
          <Route path={'/products'} element={<Content T={ProductListPage}/>}/>
          <Route path={'/b'} element={<Content/>}/>
          {/* <Route path="/panier" element={ <Panier />}/>*/}
          <Route path="/inscription" element={ <Inscription />}/>
          <Route path={'/product/:id'} element={<Content T={ProductPage} />} />
          <Route path={'/content'} element={<Content T={ProductListPage}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
