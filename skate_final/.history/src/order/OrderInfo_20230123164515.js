import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as url from '../include/var.js';
import './OrderInfo.css'
import '../App.css'

const OrderInfo = () => {

    const { id } = useParams()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/' + id + '?populate=*')
            .then(res => {
                setOrders(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
            console.log(id)
    }, [])



    return (
        <div className="invoice">
            {orders?.map((order) => (
                <div key={order.id}>
                    {console.log(order)}
                </div>
            ))}
        </div>
    )
}

export default OrderInfo;