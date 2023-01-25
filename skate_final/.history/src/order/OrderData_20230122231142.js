import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import axios from 'axios'

function OrderData() {
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get(url.api_url_local + '/commandes?populate=*&sort=id:asc')
            .then(res => {
                setProducts(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
            {products?.map((product) => (
                <div className='grid__user__product' key={product.id}>
                    <p className='grid__center'>{product.attributes.users_permissions_user.data.attributes.username}</p>
                    <p className='grid__center'>{countOrder(product.id)}</p>
                    <p className='grid__center'>{product.attributes.ref}</p>
                        <Link to={url.categorie_get + '/' + product.id} className="btn btn-sm btn-primary w-60px me-1">Afficher</Link>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default OrderData