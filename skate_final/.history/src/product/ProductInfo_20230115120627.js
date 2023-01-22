import React, { useState } from 'react'
import Nav from '../include/Nav'
import * as url from '../include/var.js'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import '../App.css'
import './ProductInfo.css'

function ProductInfo() {
    const [image, setImage] = useState(null)

    const handleFileChange = (e) => {

        if (e.target.files[0].name.split('.').pop() !== "png" && e.target.files[0].name.split('.').pop() !== "jpg" &&
            e.target.files[0].name.split('.').pop() !== "jpeg") {
            alert("Il y a un problème avec le format de l'image")
        } else {
            setImage(e.target.files[0])
        }
    }

    const loadOptions = () => {
        return fetch(url.api_url + '/api/categories')
          .then((res) => res.json())
          .then((data) => data.data);
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
                            <form className='col-lg-8'>
                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <div class="Image">
                                        <div class="icon-container">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon-demo bi bi-folder-plus" viewBox="0 0 16 16">
                                                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
                                                <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
                                            </svg>
                                        </div>
                                        <input className='file-plus' type='file' onChange={handleFileChange} />
                                        {image && (
                                            <div className="icon-container">
                                                <img class="Image__Icon" src={URL.createObjectURL(image)} alt="Thumb" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nom Du Produit</label>
                                    <input type="text" className="form-control" name="title" placeholder="Product name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Déscripton</label>
                                    <input type="text" className="form-control" name="title" placeholder="Product name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Prix</label>
                                    <input type="text" className="form-control" name="title" placeholder="Product name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Catégories</label>
                                    <Select styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            backgroundColor: state.isSelected ? "#2D353C" : "#2D353C",
                                            borderColor: '#495057',

                                        }),
                                        menuList: (base) => ({
                                            ...base,
                                            backgroundColor: "#2D353C",

                                        }),
                                        placeholder: (base) => ({
                                            ...base,
                                            color: "#6c757d",
                                            fontSize: "0.75rem",
                                            fontWeight: "600",
                                            lineHeight: "1.5",
                                        }),
                                        
                                    }}
                                    // cacheOptions
                                    // defaultOptions
                                    loadOptions={loadOptions}
                                    getOptionLabel={(e) => e.attributes.categories}
                                    placeholder='Catégorie souhaité' />
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