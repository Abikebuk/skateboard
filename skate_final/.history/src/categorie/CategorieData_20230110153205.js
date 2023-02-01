import React, { useState, useEffect, useReducer } from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import './Categorie.css'
import Switch from "react-switch";
import '../App.css'
import axios from 'axios'

function CategorieData() {
    const [categories, setCategories] = useState([])
    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

    

    const [values, setValues] = useState({
        etatCategorie: '',
    })



    useEffect(() => {
        axios.get(url.api_url_local + '/categories?sort=id:asc')
            .then(res => {
                setCategories(res.data.data)
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
        axios.put(url.api_url_local + '/categories/' + id, data)
        
        .then(res => {
            forceUpdate()
        })
        
        
        } catch (err) {
            console.log(err)
        }
    }

    const DeleteCategorie = (id) => {
        axios.delete(url.api_url_local + '/categories/' + id)
        setCategories(
            categories.filter((categorie) => {
                return categorie.id !== id;
            })
        )
    }

    return (
        <div>
            {categories?.map((categorie) => (
                <div className='grid__user__categorie' key={categorie.id}>
                    <p className='grid__center'>{categorie.attributes.nomCategorie}</p>
                    {console.log(categorie.id)}

                    <p className="form-switch grid__center">
                        {/* {categorie.attributes.etatCategorie === true ? <input className="form-check-input form-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={(e) => handleUpdate(e, categorie.id)} checked/> : <input className="form-check-input form-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={categorie.attributes.etatCategorie} onClick={(e) =>handleUpdate(e, categorie.id)} />} */}
                        {/* <input className="form-check-input form-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={(e) => handleUpdate(e, categorie.id)} checked={categorie.attributes.etatCategorie} /> */}
                        <form>
                        <input className="form-check-input form-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={(e) => handleUpdate(e, categorie.id)}  checked={categorie.attributes.etatCategorie} />
                        </form>
                    </p>
                    <p className='grid__center' nowrap="true">
                        <Link to={url.categorie_get + '/' + categorie.id} className="btn btn-sm btn-primary w-60px me-1">Edit</Link>

                        {console.log(categorie.id)}
                        <button className="btn btn-sm btn-secondary w-60px" onClick={() => DeleteCategorie(categorie.id)}>Delete</button>
                    </p>
                </div>
            ))}
        </div>
    )
}

export default CategorieData