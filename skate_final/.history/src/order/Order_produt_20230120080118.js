import React { useState } from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import './OrderInfo.css'
import '../App.css'

function OrderInfo() {
    const [message, setMessage] = useState('')

    return (
        <div>
            <div className="row">
                <div className="col">
                    <Nav />
                    <div className="table-responsive">
                        <div class="panel-heading undefined">
                            <h4 class="panel-title">Jean</h4>
                            <Link to={url.order_get} className="bi bi-plus-circle"></Link>
                        </div>
                        <div className='grid__user__order__list'>
                            <p className='grid__center'>Image</p>
                            <p className='grid__center'>Référence</p>
                            <p className='grid__center'>Nom du produit</p>
                            <p className='grid__center'>Déscription</p>
                            <p className='grid__center'>Quantité</p>

                            <img className='grid-pic' src='https://m.media-amazon.com/images/I/71I+GTI3BNL._AC_SL1391_.jpg' alt='sakte' />
                            <p className='grid__center'>DH-07-08</p>
                            <p className='grid__center'>Jean</p>
                            <p className='grid__center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <p className='grid__center'>26.90€</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo