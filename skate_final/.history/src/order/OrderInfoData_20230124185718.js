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
                const data = res.data.data.attributes.product_sells.data
                data?.map((item) => {
                    const value = item.id
                    axios.get(url.api_url_local + '/product-sells/' + value + '?populate=*')
                        .then(res => {
                            setProducts(res.data.data)
                            setLoading(false)
                        })
                    // setCounts(count += value)
                })

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
            {console.log(products))}
             {products?.map((product) => (
                <div className='invoice-table' key={product.id}>
                <p>{product.attributes.amount}</p>
                <p>{product.attributes.price}</p>
                <p>{product.attributes.f}</p>
                <p>{product.attributes.f}</p>
            </div>
            ))}
        </div>
    )
}

export default OrderInfoData