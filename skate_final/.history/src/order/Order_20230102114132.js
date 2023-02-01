import React from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import './Order.css'
import '../App.css'

function Order() {

    return (
        <div>
            <div className="row">
                <div className="col">
                    <Nav />
                    <div className="table-responsive">
                        <div class="panel-heading undefined">
                            <h4 class="panel-title">Catégoires</h4>
                            <Link to={url.order_get} className="bi bi-plus-circle"></Link>
                        </div>
                        <div className='grid__user__order'>
                            <p className='grid__center'>Référence</p>
                            <p className='grid__center'>Client</p>
                            <p className='grid__center'>Total</p>
                            <p className='grid__center'>État</p>
                            <p className='grid__center'>Date</p>
                            <p className='grid__center'>Action</p>


                            <p className='grid__center'>WH563</p>
                            <p className='grid__center'>Jean</p>
                            <p className='grid__center'>26.90€</p>
                            <p className='grid__center badge badge-warning'>Envoyé</p>
                            <p className='grid__center'>18/12/2022 09:15</p>
                            <p className='grid__center' nowrap="true">
                                <Link to={url.order_get} className="btn btn-sm btn-primary w-60px me-1">Edit</Link>
                                <Link to="/table/basic" className="btn btn-sm btn-secondary w-60px">Delete</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order