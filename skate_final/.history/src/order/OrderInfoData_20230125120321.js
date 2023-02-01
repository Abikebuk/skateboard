import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { createPath, useParams } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import './OrderInfo.css'
import axios from 'axios'

function OrderInfoData({ id }) {
    const [products, setProducts] = useState([])
    const [showMessage, setShowMessage] = useState(false);


    useEffect(() => {
        axios.get(url.api_url_local + '/product-sells/?populate=*')
            .then(res => {
                const res2 = res.data.data
                res2.map((item) => {
                    const commande = (item.attributes.commande.data)                    
                    if (commande.id == 68) {
                        const produit = (item.attributes.produit.data)
                        
                        setTimeout(() => {
                            setProducts(produit)
                        }, 1000)
                        console.log(products)
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='invoice-table'>

            {/* <p>{products.attributes.titre}</p>
            <p>{products.attributes.quantite}</p>
            <p>{products.attributes.prix}</p> */}
        </div>
    )
}

export default OrderInfoData