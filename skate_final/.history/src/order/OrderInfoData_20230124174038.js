import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { useParams } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import './OrderInfo.css'
import axios from 'axios'

function OrderData({ id }) {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    // const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const [loading, setLoading] = useState(false)
    const [formDate, setFormDate] = useState('')
    const [counts, setCounts] = useState(0)


    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/' + id + '?populate=*')
            .then(res => {
                setProducts(res.data.data)
                setLoading(false)

            })
            .catch(err => {
                console.log(err)
                setLoading(true);
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

        // const res2 = res

        if (!products) {
            const res = products.attributes.product_sells.data
                res.map((item) => {
                    const value = parseInt(item.attributes.price)
                    setCounts(count += value)
            })

        } else {
            setTimeout(() => {
                const res = products.attributes.product_sells.data
                res.map((item) => {
                    const value = parseInt(item.attributes.price)
                    setCounts(count += value)
                })
    
            }, 50);

        }
    }

    return (
        <div>

        </div>
    )
}

export default OrderData