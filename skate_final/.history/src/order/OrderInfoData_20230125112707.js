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
        setTimeout(() => {
            setShowMessage(true);
        }, 100);

        axios.get(url.api_url_local + '/product-sells/?populate=*')
            .then(res => {
                const res2 = res.data.data
                res2.map((item) => {
                    const commande = (item.attributes.commande.data)
                    if (commande.id == 68) {
                        const produit = (item.attributes.produit.data)
                        // console.log(produit)
                        produit.map((produits) => {
                            console.log(produits)
                            if (produits.attributes.commande.data.id == 68) {
                                console.log(produits)
                            }
                        })
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
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