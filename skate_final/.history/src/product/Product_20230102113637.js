import React from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import './Product.css'
import '../App.css'

function Product() {

    return (
        <div>
            <div className="row">
                <div className="col">
                    <Nav />
                    <div className="table-responsive">
                        <div class="panel-heading undefined">
                            <h4 class="panel-title">Produits</h4>
                            <Link to={url.product_get} className="bi bi-plus-circle"></Link>
                        </div>
                        <div className='grid__user__product'>
                            <p className='grid__center'>Image</p>
                            <p className='grid__center'>Nom Du Produit</p>
                            <p className='grid__center'>Déscription</p>
                            <p className='grid__center'>Prix</p>
                            <p className='grid__center'>Référence</p>
                            <p className='grid__center'>État</p>
                            <p className='grid__center'>Action</p>

                            <img className='grid-picproduct' src='https://m.media-amazon.com/images/I/71I+GTI3BNL._AC_SL1391_.jpg' alt='sakte' />
                            <p className='grid__center'>Skate à 6 roues</p>
                            <p className='grid__center grid-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <p className='grid__center'>29,99€</p>
                            <p className='grid__center'>DH-07-08</p>
                            <p className="form-switch grid__center">
                                <input className="form-check-input form-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </p>
                            <p className='grid__center' nowrap="true">
                                <Link to={url.product_get} className="btn btn-sm btn-primary w-60px me-1">Edit</Link>
                                <Link to="/table/basic" className="btn btn-sm btn-secondary w-60px">Delete</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product