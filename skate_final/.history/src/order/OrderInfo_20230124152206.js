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
    const [formDate, setFormDate] = useState('')


    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/' + id + '?populate=*')
            .then(res => {
                setProducts(res.data.data)
                setLoading(false)

            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            })

    }, [])

    const dateFromDB = products.attributes?.dtCommande
    const date = new Date(dateFromDB)
    const formattedDate = date.toLocaleDateString()

    if (loading) {
        return <p>Loading...</p>;
    }

    const countOrder = () => {
        let count = 0;
        
            const res = products.attributes
            const res2 = res.product_sells.data

            res2.map((item) => {
                console(item.attributes.price)
                // count += value
                
                
            })
        return(count)
    }



    return (
        <div>

            <div className="invoice">
                <div className="invoice-header">
                    <div className="invoice-title">Facture</div>
                    <div className="invoice-date">Date : {formattedDate}</div>
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
                    <div className="invoice-total">Total : {countOrder()}</div>
                </div>
            </div>
        </div>
    )
}

export default OrderData