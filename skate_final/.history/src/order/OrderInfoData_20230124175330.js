import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { useParams } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import './OrderInfo.css'
import axios from 'axios'

function OrderInfoData({ id }) {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    // const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const [loading, setLoading] = useState(false)
    const [formDate, setFormDate] = useState('')
    const [counts, setCounts] = useState(0)


    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/' + id + '?populate=*')
            .then(res => {
                setProducts(res.data.data.attributes.product_sells.data)
                products?.map((item) => {
                    const value = parseInt(item.attributes.product_sells)
                    setLoading(false)

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
                {products?.map((product) => {
                    <div key={product.id}>
                        {console.log(product.id)}
                    </div>
                })
                }
                {/* <tbody>
                    <tr>
                        <td>name</td>
                        <td>quantity</td>
                        <td>price</td>
                        <td>total</td>
                    </tr>

                </tbody> */}
            </div>
        )
    }

export default OrderInfoData