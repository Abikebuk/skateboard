import React from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import './Categorie.css'
import '../App.css'
import CategorieData from './CategorieData'

function CategorieUpdate() {

    return (
        <div>
            <div className="row">
                <div className="col">
                    <Nav />
                    <div className="table-responsive">
                        <div className="panel-heading undefined">
                            <h4 class="panel-title">Catégoires</h4>
                            <Link to={url.categorie_create} className="bi bi-plus-circle"></Link>
                        </div>
                        <div className='grid__user__categorie'>
                            <p className='grid__center'>Nom Categorie</p>
                            <p className='grid__center'>Status</p>
                            <p className='grid__center'>Action</p>
                        </div>
                        <CategorieData />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorieUpdate