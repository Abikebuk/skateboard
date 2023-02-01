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
                console.log(products)
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
            {products?.map((product) => {
                <div key={product.id}>
                    {/* <tbody>
                        <tr>
                            <td>nameeee</td>
                            <td>quantity</td>
                            <td>price</td>
                            <td>total</td>
                        </tr>
                    </tbody> */}
                    <p>sqdfjiosdqfiosj</p>
                </div>
            })}
        </div>
    )
}

export default OrderInfoData