import React from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import ProductData from './ProductData'
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
                            <p className='grid__center'>Nom Du Produit</p>
                            <p className='grid__center'>Déscription</p>
                            <p className='grid__center'>Prix</p>
                            <p className='grid__center'>Référence</p>
                            <p className='grid__center'>État</p>
                            <p className='grid__center'>Action</p>
                        </div>
                        <ProductData />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product