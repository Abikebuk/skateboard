import React, {useState} from 'react'
import * as url from './var.js'
import './Sidebar.scss'
import '../App.css'

import {
  Link,
} from 'react-router-dom'

function Sidebar() {
  const [clickProduct, setClickProduct] = useState(false)
  const [clickCompte, setclickCompte] = useState(false)

  const handleClickProduct = () => {
    if (clickProduct === false) {
      setClickProduct(true)
      setclickCompte(false)
    } else {
      setClickProduct(false)
    }
  }

  const handleclickCompte = () => {
    if (clickCompte === false) {
      setclickCompte(true)
      setClickProduct(false)
    } else {
      setclickCompte(false)
    }
  }

  return (
    <div id={'sidebar-menu-wrapper'} className={'container-fluid p-0'}>
      <div className="row h-100">
        <div className="sidebar-menu col-auto p-0">
          <div className="sidebar-header">
            <div className="logo">
              <Link to = "/">
                <img src="/icon_logo.png" alt="logo"/>
              </Link>
            </div>
          </div>
          <div className="main-menu">
            <div className="menu-inner">
              <nav>
                <ul className="metismenu" id="menu">
                  <li onClick={handleClickProduct} className={clickProduct ? 'active' : ''}>
                    <a href="javascript:void(0)" aria-expanded="true"><i className="ti-dashboard"></i><span>Les Produits</span></a>
                    <ul className={clickProduct ? 'collapse in' : 'collapse'}>
                      <Link to={url.products}>Liste des produits</Link>
                    </ul>
                  </li>
                  {/* AFFICHER SEULEMENT QUAND LE CLIENT EST CONNECTE*/}
                  <li onClick={handleclickCompte} className={clickCompte ? 'active' : ''}>
                    <a href="javascript:void(0)" aria-expanded="true"><i className="ti-palette"></i><span>Mon Compte</span></a>
                    <ul className={clickCompte ? 'collapse in' : 'collapse'}>
                      <li><a href="#">Mes Données Personnelles</a></li>
                      <li><a href="#">Mes Commandes</a></li>
                      <li><a href="#">Suivi des Commandes</a></li>
                    </ul>
                  </li>
                  <li>
                    <Link to = "/#" aria-expanded="true"><i className="ti-layout-sidebar-left"></i><span>Nous Contacter</span></Link>
                  </li>
                  <li>
                    <Link to = "/cgv" aria-expanded="true"><i className="fa fa-table"></i><span>Condition Générale Vente</span></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div id={'sidebar-menu-hide'} className={'col p-0'} onClick={hideMenu}/>
      </div>
    </div>

  )
}
function hideMenu() {
  document.getElementById('sidebar-menu-wrapper').classList.remove('active')
  document.getElementById('sidebar-menu-hide').classList.remove('active')
}
export default Sidebar
