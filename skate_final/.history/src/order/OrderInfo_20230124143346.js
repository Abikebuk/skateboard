import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import axios from 'axios'

function OrderData() {
    const [products, setProducts] = useState([])
    // const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/65?populate=*')
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

    // if (loading) {
    //     return <p>Loading...</p>;
    //   }

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
            
            <p>{products.id}</p>
        </div>
    )
}

export default OrderData