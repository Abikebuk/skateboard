import React, {useState} from 'react'

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
import Menus from './include/Menus'
import Contact from './include/Contact'
import * as AuthApi from './AuthApi'
import AuthenticationContext from './AuthenticationContext'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthApi.isAuthenticated)
  return (
    <AuthenticationContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/cgv" element={<Menus T={Cgv} />} />
            <Route path="/connexion" element={<Menus T={Connexion} />} />
            <Route path="/" element={ <Home />}/>
            <Route path={'/products'} element={<Menus T={ProductListPage}/>}/>
            {/* <Route path="/panier" element={ <Panier />}/>*/}
            <Route path="/inscription" element={ <Menus T={Inscription} />}/>
            <Route path={'/product/:id'} element={<Menus T={ProductPage} />}/>
            <Route path={'/content'} element={<Menus T={ProductListPage}/>}/>
            <Route path={'/contact'} element={<Menus T={Contact}/>}/>
            <Route path={'/category/:id'} element={<Menus T={ProductListPage} />} />
          </Routes>
        </Router>
      </div>
    </AuthenticationContext.Provider>

  )
}

export default App
