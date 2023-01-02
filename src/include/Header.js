import React, {Component} from 'react'
import './Header.scss'
import {
  BrowserRouter,
  Link,
} from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <div className="header-area">
        <div className='head__flex'>
          <input className='head__search' type='search' placeholder="Rechercher sur le site…"></input>
          <input type="submit" class="head__search2" value="Rechercher" />
            <ul className="notification-area pull-right">
              <li>
                <Link to = "/connexion" aria-expanded="true">
                  <img src={process.env.PUBLIC_URL + '/account.png'} />
                </Link>
              </li>
              <li>
                <Link to = "/panier" aria-expanded="true">
                  <img src={process.env.PUBLIC_URL + '/panier.png'} />
                </Link>
              </li>
            </ul>
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
