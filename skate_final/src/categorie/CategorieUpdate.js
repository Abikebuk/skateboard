import React, { useState, useEffect } from 'react'
import Nav from '../include/Nav'
import { useParams } from 'react-router-dom'
import * as url from '../include/var.js'
import '../App.css'
import axios from 'axios'

function UserInfo() {
    const { id } = useParams()
    const [categories, setCategories] = useState([])
    const [message, setMessage] = useState('')
    const [values, setValues] = useState({
        nomCategorie: '',
    })

    useEffect(() => {
        axios.get(url.api_url_local + '/categories/' + id)
            .then(res => {
                setCategories(res.data.data.attributes.nomCategorie)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    function handleUpdate(e) {
        e.preventDefault()
        const data = {
            "data": {
                nomCategorie: values.nomCategorie
            }
        }
        console.log(values.nomCategorie)
        axios.put(url.api_url_local + '/categories/' + id, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function updateEdit(e) {

        const newupdate = { ...values }
        newupdate[e.target.id] = e.target.value
        setValues(newupdate)
    }

    const handleChange = (event) => {
        setMessage(event.target.value)
        updateEdit(event)
    }


    return (
        <div>
            <div className="row">
                <div className="col">
                    <Nav />
                    <div className="table-responsive">
                        <div className="panel-heading undefined">
                            <h4 class="panel-title">Catégories</h4>
                        </div>
                        <div className="card-body">
                            <form className='col-lg-8' onSubmit={handleUpdate}>
                                <div className="mb-3">
                                    <label className="form-label">Nom de la catégorie</label>
                                    <input id='nomCategorie' type="text" className="form-control" onChange={(e) => handleChange(e)} value={values.nomCategorie} placeholder={categories} />
                                </div>
                                <input type="submit" className="btn btn-secondary" value="Enregister" onClick={(e) => updateEdit(e)} />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default UserInfo