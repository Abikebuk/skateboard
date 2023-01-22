import React, {useContext, useEffect, useState} from 'react'
import * as url from './var.js'
import './Sidebar.scss'
import '../App.css'

import {
  Link, useNavigate,
} from 'react-router-dom'
import axios from 'axios'
import AuthenticationContext from '../AuthenticationContext'

function Sidebar() {
  const navigate = useNavigate()
  const context = useContext(AuthenticationContext)
  const [clickProduct, setClickProduct] = useState(false)
  const [clickCompte, setclickCompte] = useState(false)
  const [categories, setCategories] = useState([])

  const disconnect = () =>{
    window.localStorage.removeItem("authToken", null)
    window.localStorage.removeItem('username', null)
    window.localStorage.removeItem('id', null)
    context.setIsAuthenticated(false)
    navigate('/')
  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_BACK_URL + '/api/categories?fields[0]=nomCategorie',
    }).then((res) => {
      if (res != null) {
        const result = res.data.data.map((elem) => ({name : elem.attributes.nomCategorie, id: elem.id}) )
        setCategories(result)
      }
    })
  }, [context.isAuthenticated])
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
              <div className={'container-fluid'}>
                  <div className={'row justify-content-center'}>
                    <div className={'col-auto d-md-none icon'}>
                      <div id={'user-connection-block'} className={context.isAuthenticated ? 'authenticated' : null}>
                        <Link to={context.isAuthenticated ? '/personal' : '/connexion'} aria-expanded="true">
                          <img src={process.env.PUBLIC_URL + '/account.png'}/>
                          {
                            context.isAuthenticated ?
                              <span>{window.localStorage.getItem("username")}</span> :
                              null
                          }
                        </Link>
                      </div>
                    </div>
                    <div id={"sidebar-disconnect"} className={"d-md-none"}>
                      {
                        context.isAuthenticated ?
                            <ul className={'p-0'}>
                              <li onClick={disconnect}><span>Se déconnecter</span></li>
                            </ul> :
                          null
                      }
                    </div>
                  </div>
                </div>
              <br/>
              <nav>
                <ul className="metismenu" id="menu">
                  <li onClick={handleClickProduct} className={clickProduct ? 'active' : ''}>
                    <a href="javascript:void(0)" aria-expanded="true"><i className="ti-dashboard"></i><span>Les Produits</span></a>
                    <ul className={clickProduct ? 'collapse in' : 'collapse'}>
                      <li key={'all'}>
                        <Link to={url.products}>Liste des produits</Link>
                      </li>
                      {
                        categories.map((cat) => <li key={cat.id}>
                          <Link to={`/category/${cat.id}`}>
                            {cat.name.endsWith('s') ? cat.name : cat.name+'s'}
                          </Link>
                        </li>)
                      }
                    </ul>
                  </li>
                  {
                      context.isAuthenticated ?
                        <li onClick={handleclickCompte} className={clickCompte ? 'active' : ''}>
                          <a href="javascript:void(0)" aria-expanded="true"><i className="ti-palette"></i><span>Mon Compte</span></a>
                          <ul className={clickCompte ? 'collapse in' : 'collapse'}>
                            <li><a href="/personal">Mes Données Personnelles</a></li>
                            <li><a href="/delivery">Mes Données de Livraison</a></li>
                            <li><a href="/orders">Mes Commandes</a></li>
                          </ul>
                        </li>
                        : null
                      }
                  <li>
                    <Link to = "/contact" aria-expanded="true"><i className="ti-layout-sidebar-left"></i><span>Nous Contacter</span></Link>
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


/*

                      {
                      context.isAuthenticated ?
                        <li onClick={handleclickCompte} className={clickCompte ? 'active' : ''}>
                          <a href="javascript:void(0)" aria-expanded="true"><i className="ti-palette"></i><span>Mon Compte</span></a>
                          <ul className={clickCompte ? 'collapse in' : 'collapse'}>
                            <li><a href="#">Mes Données Personnelles</a></li>
                            <li><a href="/delivery">Mes Données de Livraison</a></li>
                            <li><a href="#">Mes Commandes</a></li>
                          </ul>
                        </li>
                        : null
                      }

*/
