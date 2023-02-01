import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as url from '../include/var.js';
import './OrderInfo.css'

const OrderInfo = () => {

    const { id } = useParams()
    const [orderss, setOrderss] = useState([])

    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/' + id + '?populate=*')
            .then(res => {
                setOrderss(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <div className="invoice">
            {orderss?.map((order) => (
                <div key={order.id}>
                    <div className="invoice-header">
                        <div className="invoice-title">Facture</div>
                        <div className="invoice-date">Date : invoiceDate</div>
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
            ))}
        </div>
    );
};

export default OrderInfo;