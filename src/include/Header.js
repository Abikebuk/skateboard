import React, {Component, useContext, useEffect, useState} from 'react'
import './Header.scss'
import {
  Link, useNavigate,
} from 'react-router-dom'
import AuthenticationContext from '../AuthenticationContext'
import * as AuthApi from '../AuthApi'

function Header() {
  const navigate = useNavigate()
  const context = useContext(AuthenticationContext)
  useEffect(() =>{
    console.log(context.isAuthenticated)
  }, [context.isAuthenticated])
  const disconnect = () =>{
    window.localStorage.removeItem("authToken", null)
    window.localStorage.removeItem('username', null)
    context.setIsAuthenticated(false)
    navigate('/')
  }
  return (
    <div className="header-area">
      <div className='head__flex'>
        <div className={'container-fluid p-0 m-0'}>
          <div className={'row p-0 m-0'}>
            <div className='col-auto'>
              <button className='d-md-none' onClick={clickMenu}>MENU</button>
            </div>
            <div className={'col'}>
              <div id={'searchbar'}>
                <div className={'container-fluid p-0 m-0'}>
                  <div className={'row p-0 m-0'}>
                    <div className={'col'}>
                      <input className='head__search' type='search' placeholder="Rechercher sur le site…"></input>
                    </div>
                    <div className={'col-auto'}>
                      <button type="submit" className='head__search2'><i className='bi bi-search'></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={'col-auto d-md-block icon'}>
              <div id={'user-connection-block'} className={context.isAuthenticated ? 'authenticated' : null}>
                <Link to={context.isAuthenticated ? '/personal' : '/connexion'} aria-expanded="true">
                  <img src={process.env.PUBLIC_URL + '/account.png'}/>
                  {
                    context.isAuthenticated ?
                      <span>{window.localStorage.getItem("username")}</span> :
                      null
                  }
                </Link>
                {
                  context.isAuthenticated ?
                    <div id={'user-connection-block-dropdown'}>
                      <ul>
                        <li onClick={disconnect}><span>Se déconnecter</span></li>
                      </ul>
                    </div> :
                    null
                }
              </div>
            </div>
            <div className={'col-auto'}>
              <Link to="/panier" aria-expanded="true">
                <img src={process.env.PUBLIC_URL + '/panier.png'}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function clickMenu() {
  console.log('af')
  document.getElementById('sidebar-menu-wrapper').classList.add('active')
  document.getElementById('sidebar-menu-hide').classList.add('active')
}


export default Header
