import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { createPath, useParams } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import './OrderInfo.css'
import axios from 'axios'

function OrderInfoData({ id }) {
    const [products, setProducts] = useState([])
    const [commandes, setCommandes] = useState([])
    const [showMessage, setShowMessage] = useState(false);


    useEffect(() => {
        axios.get(url.api_url_local + '/product-sells/?populate=*')
            .then(res => {
                const res2 = res.data.data
                setCommandes(res2)
                // res2.map((item) => {
                //     setCommandes(item.attributes.commande)
                    
                    // setProducts(item.attributes.produit.data)  
                    // if (commande.id == 68) {
                    //     const produit = (item.attributes.produit.data)
                       
                    // }
                // })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div >
            {commandes.map((commande) => (
                <div className='invoice-table' key={commande.id}>
                    {commande.attributes.commande.data.id == 68 ? <p>{commande.attributes.produit.data.attributes.titre}</p> : null}
                    {commande.attributes.commande.data.id == 68 ? <p>{commande.attributes.produit.data.attributes.quantite}</p> : null}
                    {commande.attributes.commande.data.id == 68 ? <p>{commande.attributes.produit.data.attributes.prix}</p> : null}
                </div>
            ))}
        </div>
    )
}

export default OrderInfoData