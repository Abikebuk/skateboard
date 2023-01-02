import React, {Component} from 'react'
import * as url from './var.js'
import './Sidebar.scss'
import '../App.css'

import {
  BrowserRouter,
  Link,
} from 'react-router-dom'


class Sidebar extends Component {
  state = {clickProduct: false, clickOrder: false}

  handleClickProduct = () => {
    if (this.state.clickOrder) {
      this.setState({clickOrder: this.state.clickOrder === false})
    }
    this.setState({clickProduct: !this.state.clickProduct})
  }

  handleClickOption = () => {
    if (this.state.clickProduct) {
      this.setState({clickProduct: this.state.clickProduct === false})
    }
    this.setState({clickOption: !this.state.clickOption})
  }

  handleClickParam = () => {
    if (this.state.clickProduct && this.state.clickOption) {
      this.setState({clickProduct: this.state.clickProduct === false && this.state.clickOption === false})
    }

    this.setState({clickParam: !this.state.clickParam})
  }

  productListUrl = '/products'

  render() {
    return (
      <div id={'sidebar-menu-wrapper'} className={'container-fluid p-0'}>
        <div className="row h-100">
          <div className="sidebar-menu col-auto p-0">
            <div className="sidebar-header">
              <div className="logo">
                <Link to = "/">
                  <img src="/icon_logo.png" alt="logo"/>
                </Link>
                {/*<p>test</p>*/}
              </div>
            </div>
            <div className="main-menu">
              <div className="menu-inner">
                <nav>
                  <ul className="metismenu" id="menu">
                    <li onClick={this.handleClickProduct} className={this.state.clickProduct ? 'active' : ''}>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-dashboard"></i><span>PRODUITS</span></a>
                      <ul className={this.state.clickProduct ? 'collapse in' : 'collapse'}>
                        <Link to={url.products}>Liste des produits</Link>
                      </ul>
                    </li>
                    <li onClick={this.handleClickOption} className={this.state.clickProduct ? 'active' : ''}>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-layout-sidebar-left"></i><span>OPTIONS
                      </span></a>
                      <ul className={this.state.clickOption ? 'collapse in' : 'collapse'}>
                        {/* <Link to={url.option_management}>Gestion des options</Link> */}
                      </ul>
                    </li>
                    <li onClick={this.handleClickParam} className={this.state.clickParam ? 'active' : ''}>
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-pie-chart"></i><span>RÉGLAGES</span></a>
                      <ul className={this.state.clickParam ? 'collapse in' : 'collapse'}>
                        <li><a href="client.html">Comptes client</a></li>
                        <li><a href="b_user.html">Comptes utilisateur</a></li>
                        <li><a href="module.html">Modules</a></li>
                        <li><a href="theme.html">Thèmes</a></li>
                        <li><a href="translate.html">Traduction</a></li>
                      </ul>
                    </li>
                    <li className="active">
                      <a href="javascript:void(0)" aria-expanded="true"><i className="ti-palette"></i><span>COMMANDES</span></a>
                      <ul className="collapse">
                        <li><a href="invoice.html">Devis</a></li>
                        <li><a href="invoice_tracking.html">Suivi des devis</a></li>
                        <li><a href="client_order.html">Commandes Clients</a></li>
                        <li><a href="client_tracking.html">Suivi des commandes Clients</a></li>
                        <li><a href="provider_order.html">Commandes Fournisseurs</a></li>
                        <li><a href="provider_tracking.html">Suivi des Commandes Fournisseurs</a></li>
                      </ul>
                    </li>
                    <li>
                    <Link to = "/cgv" aria-expanded="true"><i className="fa fa-table"></i>
                        <span>CONDITION GENERAL VENTE</span></Link>
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
}
function hideMenu() {
  document.getElementById('sidebar-menu-wrapper').classList.remove('active')
  document.getElementById('sidebar-menu-hide').classList.remove('active')
}
export default Sidebar
