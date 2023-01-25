import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { useParams } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import './OrderInfo.css'
import axios from 'axios'

function OrderInfoData({ id }) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/' + id + '?populate=*')
            .then(res => {
                setProducts(res.data.data.attributes.product_sells.data)
            })
            .catch(err => {
                console.log(err)
                setLoading(true);
            })

    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div>
                <p>nameeee</p>
                <p>quantity</p>
                <p>price</p>
                <p>totaqsdfl</p>
                <p>sqdfsdqfsq</p>
            </div> 
        </div>
    )
}

export default OrderInfoData