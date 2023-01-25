import React, { useState, useEffect } from 'react'
import Nav from '../include/Nav'
import { useParams } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import './OrderInfo.css'
import axios from 'axios'

function OrderData() {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/' + id + '?populate=*')
            .then(res => {
                setProducts(res.data.data)
                setLoading(false)
                // products.map((product) => {
                //     if (product.id === 65) {
                //         setOrders(product)
                //     }
                // })
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            })
            
    }, [])

    if (loading) {
        return <p>Loading...</p>;
      }

    const countOrder = (id) => {
        let count = 0;
        products.map((product) => {
            if (product.id === id) {
            const res = product.attributes.product_sells.data
            res.map((item) => {
                const value = parseInt(item.attributes.price)
                count += value
                
            })
        }
        
        })
        return(count)
    }

    // const DeleteCategorie = (id) => {
    //     axios.delete(url.api_url_local + '/produits/' + id)
    //     setProducts(
    //         products.filter((product) => {
    //             return product.id !== id;
    //         })
    //     )
    // }

    return (
        <div>
            
                <div className="invoice">
                    <div className="invoice-header">
                        <div className="invoice-title">Facture</div>
                        <div className="invoice-date">Date : </div>
                    </div>
                    <div className="invoice-body">
                        <div className="invoice-from">
                            <div className="invoice-from-title">De</div>
                            <div className="invoice-from-name">fromName</div>
                            <div className="invoice-from-address">fromAddress</div>
                        </div>
                        <div className="invoice-to">
                            <div className="invoice-to-title">À</div>
                            <div className="invoice-to-name">toName</div>
                            <div className="invoice-to-address">toAddress</div>
                        </div>
                        <table className="invoice-table">
                            <thead>
                                <tr>
                                    <th>Produit</th>
                                    <th>Quantité</th>
                                    <th>Prix</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>name</td>
                                    <td>quantity</td>
                                    <td>price</td>
                                    <td>total</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="invoice-footer">
                        <div className="invoice-total">Total : total</div>
                    </div>
                </div>
        </div>
    )
}

export default OrderData