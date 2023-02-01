import React, { useState, useEffect, useParams } from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import axios from 'axios'
import './OrderInfo.css'

function OrderData() {
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get(url.api_url_local + '/commandes/65?populate=*&sort=id:asc')
            .then(res => {
                setProducts(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
                <div className='grid__user__order' key={product.id}>
                    <p className='grid__center'>{product.id}</p>
                    <p className='grid__center'>{product.attributes.users_permissions_user.data.attributes.username}</p>
                    <p className='grid__center'>{product.attributes.dtCommande}</p>
                    <p className='grid__center' nowrap="true">
                        <Link to={url.order_get + '/' + product.id} className="btn btn-sm btn-primary w-60px me-1">Afficher</Link>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default OrderData