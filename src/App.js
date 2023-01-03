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
import Menus from './include/Menus'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/cgv" element={<Menus T={Cgv} />} />
          <Route path="/connexion" element={<Menus T={Connexion} />} />
          <Route path="/" element={ <Home />}/>
          <Route path={'/products'} element={<Menus T={ProductListPage}/>}/>
          {/* <Route path="/panier" element={ <Panier />}/>*/}
          <Route path="/inscription" element={ <Menus T={Inscription} />}/>
          <Route path={'/product/:id'} element={<Menus T={ProductPage} />} />
          <Route path={'/content'} element={<Menus T={ProductListPage}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
