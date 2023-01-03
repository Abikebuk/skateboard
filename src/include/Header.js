import React, {Component} from 'react'
import './Header.scss'
import {
  Link,
} from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <div className="header-area">
        <div className='head__flex'>
          <button className='d-md-none' onClick={clickMenu}>MENU</button>
          <div className={'container-fluid p-0 m-0'}>
            <div className={'row p-0 m-0'}>
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
                <Link to = "/connexion" aria-expanded="true">
                  <img src={process.env.PUBLIC_URL + '/account.png'} />
                </Link>
              </div>
              <div className={'col-auto d-md-block icon'}>
                <Link to = "/panier" aria-expanded="true">
                  <img src={process.env.PUBLIC_URL + '/panier.png'} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function clickMenu() {
  console.log('af')
  document.getElementById('sidebar-menu-wrapper').classList.add('active')
  document.getElementById('sidebar-menu-hide').classList.add('active')
}


export default Header
