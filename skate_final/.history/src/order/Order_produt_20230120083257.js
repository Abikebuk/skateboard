import React, { useEffect, useState } from 'react'
import Nav from '../include/Nav'
import axios from 'axios'
import * as url from '../include/var.js'
import { Link, redirect } from 'react-router-dom'
import Select from 'react-select/async'
import '../App.css'

function Order_produt({ evtId }) {
    const [image, setImage] = useState(null)
    const [posts, setPosts] = useState([])
    const [results, setResults] = useState([])
    const [message, setMessage] = useState('')
    const [values, setValues] = useState({
        dtCommande: '',
        status: '',
    })

    function updateEdit(e) {
        const newupdate = { ...values }
        newupdate[e.target.id] = e.target.value
        setValues(newupdate)
    }

    const handleChange = (event) => {
        setMessage(event.target.value)
        updateEdit(event)
    }



    const handleCreate = (e) => {
        console.log('handleSubmit')
        e.preventDefault()

        const formData = new FormData()
        axios.post(url.api_url_local + '/commandes/', {
            "data": {
                // dtCommande: year+"-"+month+"-"+date+"T"+00:00:00.000Z",
                dtCommande: Date.now(),
                status: values.status,
            }
            

        }).then(res => {
            console.log(res)
        })
    }
    return (
        <div>
            <div className="row">
                <div className="col">
                    <Nav />
                    <div className="table-responsive">
                        <div className="panel-heading undefined">
                            <h4 class="panel-title">Information Du Produit</h4>
                        </div>
                        <div className="card-body">
                            <form className='col-lg-8' onSubmit={handleCreate}>
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label className="form-label">Déscripton</label>
                                        <input id="status" onChange={(e) => handleChange(e)} value={values.status} type="text" className="form-control" name="title" placeholder="Déscription du produit" />
                                    </div>

                                </div>
                                <input type="submit" className="btn btn-secondary" value="Enregister" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Order_produt