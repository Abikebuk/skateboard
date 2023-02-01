import React from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import OrderData from './OrderData'
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
                            <p className='grid__center'>Id</p>
                            <p className='grid__center'>Client</p>
                            <p className='grid__center'>Date</p>
                            <p className='grid__center'>Action</p>

                            </div>
                            <OrderData />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order