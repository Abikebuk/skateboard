import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import './Product.css'
import '../App.css'
import axios from 'axios'

function ProductData() {
    const [products, setProducts] = useState([])
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    

    const [values, setValues] = useState({
        etatCategorie: '',
    })



    useEffect(() => {
        axios.get(url.api_url_local + '/produits?sort=id:asc')
            .then(res => {
                setProducts(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [reducerValue])

    async function handleUpdate(e, id) {
        const data = {
            "data": {
                etatCategorie: e.target.checked
            }
        }
        try {
        axios.put(url.api_url_local + '/produits/' + id, data)
        .then(res => {
            forceUpdate()
        })
        } catch (err) {
            console.log(err)
        }
    }

    const DeleteCategorie = (id) => {
        axios.delete(url.api_url_local + '/produits/' + id)
        setProducts(
            products.filter((product) => {
                return product.id !== id;
            })
        )
    }

    return (
        <div>
            {products?.map((product) => (
                <div className='grid__user__categorie' key={product.id}>
                    <img className='grid-picproduct' src={product.image.data.attributes.formats.thumbnail.url} alt='sakte' />
                    <p className='grid__center'>{product.attributes.titre}</p>
                    <p className='grid__center grid-description'>{product.attributes.description}</p>
                    <p className='grid__center'>{product.attributes.prix}</p>
                    <p className='grid__center'>{product.attributes.ref}</p>
                    <p className="form-switch grid__center">
                        <form>
                        <input className="form-check-input form-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={(e) => handleUpdate(e, product.id)}  checked={product.attributes.etatProduit} />
                        </form>
                    </p>
                    <p className='grid__center' nowrap="true">
                        <Link to={url.categorie_get + '/' + product.id} className="btn btn-sm btn-primary w-60px me-1">Edit</Link>

                        {console.log(product.id)}
                        <button className="btn btn-sm btn-secondary w-60px" onClick={() => DeleteCategorie(product.id)}>Delete</button>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ProductData