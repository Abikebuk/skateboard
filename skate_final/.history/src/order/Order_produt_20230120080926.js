import React, { useEffect, useState } from 'react'
import Nav from '../include/Nav'
import axios from 'axios'
import * as url from '../include/var.js'
import { Link, redirect } from 'react-router-dom'
import Select from 'react-select/async'
import '../App.css'
import './ProductInfo.css'

function ProductInfo({ evtId }) {
    const [image, setImage] = useState(null)
    const [posts, setPosts] = useState([])
    const [results, setResults] = useState([])
    const [message, setMessage] = useState('')
    const [values, setValues] = useState({
        dtCommande: '',
        description: '',
        status: '',
    })

    const handleFileChange = (e) => {
        if (e.target.files[0].name.split('.').pop() !== "png" && e.target.files[0].name.split('.').pop() !== "jpg" &&
            e.target.files[0].name.split('.').pop() !== "jpeg") {
            alert("Il y a un problème avec le format de l'image")
        } else {
            setImage(e.target.files[0])
        }
    }

    function updateEdits(e) {
        const newupdate = { ...values }
        newupdate["categoriesid"] = results
        console.log(e)
        setValues(newupdate)
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

    const loadOptions = () => {
        return fetch(url.api_url_local + '/categories')
            .then((res) => res.json())
            .then((data) => data.data)
    }

    function checkSelect(e, value) {
        console.log(e.id)
        setResults(e.id)
        console.log(results)
    }



        const handleUpdate = async (e) => {
            console.log('handleSubmit')
            e.preventDefault()
        
            const formData = new FormData()
            formData.append('files', image) // the pic
            formData.append('ref', 'api::testun.testun') // link with my table
            formData.append('refId', evtId)
            axios.post(url.api_url_local + '/upload/', formData).then(res => {
              console.log(res.data[0].id)
            //formData.append('field', 'picproductgroup') // the row
              // if (message.trim().length !== 0) {
              const res2 = axios.post(url.api_url_local + '/produits/', {
                "data": {
                    titre: values.titre,
                    description: values.description,
                    prix: values.prix,
                    quantite: values.quantite,
                    ref: values.ref,
                    image: res.data[0].id,
                    categories: {
                        id: results
                    }
                }
              }
              
              )
              console.log(values)
              console.log(res.data)
              if (res2.ok) {
                console.log(res2)
                console.log('res.ok')
                console.log('res', res2)
              }
            }).catch(error => {
              console.log(error.message);
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
                            <form className='col-lg-8' onSubmit={handleUpdate}>
                                <div className="mb-3">
                                    <label className="form-label">Catégories</label>
                                    <Select
                                        styles={{

                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                backgroundColor: state.isSelected ? "#2D353C" : "#2D353C",
                                                color: state.isSelected ? "#2D353C" : "#2D353C",
                                                borderColor: '#495057',

                                            }),
                                            option: (provided, state) => ({
                                                ...provided,
                                                backgroundColor: state.isSelected ? "rgba(189,197,209,.3)" : "#2D353C",
                                            }),

                                            menuList: (base) => ({
                                                ...base,
                                                backgroundColor: "#2D353C",

                                            }),
                                            singleValue: provided => ({
                                                ...provided,
                                                color: '#6c757d'
                                            }),
                                            backgroundColor: "red",

                                            placeholder: (base) => ({
                                                ...base,
                                                color: "#6c757d",
                                                fontSize: "0.75rem",
                                                fontWeight: "600",
                                                lineHeight: "1.5",
                                            }),
                                        }}
                                        cacheOptions
                                        defaultOptions
                                        maxMenuHeight={190}
                                        loadOptions={loadOptions}
                                        getOptionLabel={(e) => e.attributes.nomCategorie}
                                        getOptionValue={(e) => e.id}
                                        placeholder='Catégorie souhaité'
                                        onChange={(e) => checkSelect(e, "categoriesid")}
                                    />
                                    <div className="mb-3">
                                        <label className="form-label">Nom Du Produit</label>
                                        <input id="titre" onChange={(e) => handleChange(e)} value={values.titre} type="text" placeholder="titre" className="form-control" name="Titre du produit" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Déscripton</label>
                                        <input id="description" onChange={(e) => handleChange(e)} value={values.description} type="text" className="form-control" name="title" placeholder="Déscription du produit" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Prix</label>
                                        <input id="prix" onChange={(e) => handleChange(e)} value={values.prix} type="text" className="form-control" name="title" placeholder="Prix du produit" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Quantité</label>
                                        <input id="quantite" onChange={(e) => handleChange(e)} value={values.quantite} type="text" className="form-control" name="title" placeholder="Quantité du produit" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Référence</label>
                                        <input id="ref" onChange={(e) => handleChange(e)} value={values.ref} type="text" className="form-control" name="title" placeholder="Référence du produit" />
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
export default ProductInfo