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
        <div  className='invoice-table'>
            {console.log(products.attributes.amount)}
                {/* {/* <p>{products.attributes.amount}</p> */}
                <p>{products.attributes.price}</p>
                <p>{products.attributes.f}</p>
                <p>{products.attributes.f}</p> */}
        </div>
    )
}

export default OrderInfoData