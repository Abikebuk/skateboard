import React, { useLayoutEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import './Nav.css'

function Nav() {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="app app-sidebar-minified has-scroll ">
                <div id="header" className="app-header app-header-inverse">
                    <div className="navbar-header">
                        <img className='logo-pic' src='https://i.goopics.net/zcetkh.png' alt='logo' />
                        <button type="button" className="navbar-mobile-toggler">
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                        </button>
                    </div>

                </div>
                <div id="sidebar" className="app-sidebar">
                    <div className="scrollbar-container app-sidebar-content ps">
                        <div className="menu">
                            <div className="menu-profile">
                                <a className="menu-profile-link" href="http://localhost:3000/">
                                    <div className="menu-profile-cover with-shadow"></div>
                                    <div className="menu-profile-image"><img src="./Color Admin _ React Version_files/user-13.jpg" alt="" /></div>
                                    <div className="menu-profile-info">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-grow-1">Marc KACZOR</div>
                                            <div className="menu-caret ms-auto"></div>
                                        </div>
                                        <small>Administrateur</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="menu">
                            <div className="menu-header">Navigation</div>
                            <div className="menu-item">
                                <Link to={url.user} className="menu-link" >
                                    <div className="menu-icon"><i className="fa fa-sitemap"></i></div>
                                    <div className="menu-text">Page d'accueil</div>
                                </Link>
                            </div>
                            <div className="menu-item has-sub">
                                <Link to={url.categorie} className="menu-link">
                                    <div className="menu-icon"><i className="fa fa-hdd"></i></div>
                                    <div className="menu-text">Catégorie</div>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to={url.user} className="menu-link" >
                                    <div className="menu-icon"><i className="fa fa-table"></i></div>
                                    <div className="menu-text">Utilisateurs</div>
                                </Link>
                            </div>
                            <div className="menu-item has-sub">
                                <Link to={url.order} className="menu-link">
                                    <div className="menu-icon"><i className="fa fa-cash-register"></i></div>
                                    <div className="menu-text">Commande</div>
                                </Link>
                            </div>
                            <div className="menu-submenu">
                                <div className="menu-item">
                                    <Link to={url.product} className="menu-link">
                                        <div className="menu-icon"><i className="fa fa-paper-plane text-theme"></i></div>
                                        <div className="menu-text">Produit</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
