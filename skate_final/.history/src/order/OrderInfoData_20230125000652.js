import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { useParams } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import './OrderInfo.css'
import axios from 'axios'

function OrderInfoData({ id }) {
    const [products, setProducts] = useState([])
    const [showMessage, setShowMessage] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setShowMessage(true);
        }, 100);

        axios.get(url.api_url_local + '/product-sells/?populate=*')
            .then(res => {
                res = res.data.data
                res.map((item) => {
                    item = (item.attributes.commande.data)
                    if (item.id === id) {
                        console.log((res)
                    }
                })

            })
            .catch(err => {
                console.log(err)
            })
        //     setTimeout(() => {
        //     console.log(products)
        // }, 1000);
    }, [])

    return (
        <div className='invoice-table'>
            
            {/* {showMessage ? <p>{products.attributes.titre}</p> : <p>Loading...</p>}
                <p>{products.attributes.quantite}</p> 
                {showMessage ? <p>{products.attributes.prix}</p> : <p>Loading...</p>} */}
        </div>
    )
}

export default OrderInfoData