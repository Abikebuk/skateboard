import React from 'react'
import Nav from '../include/Nav'
import * as url from '../include/var.js'
import { Link } from 'react-router-dom'
import './UserInfo.css'
import '../App.css'

function UserInfo() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <Nav />
                    <div className="table-responsive">
                        <div className="panel-heading undefined">
                            <h4 class="panel-title">Information Utilisateurs</h4>
                        </div>
                        <div className="card-body">
                            <form className='col-lg-8'>
                                <div className="mb-3">
                                    <label className="form-label">Nom d'Utilisateur</label>
                                    <input type="text" className="form-control" name="title" placeholder="Product name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">E-mail</label>
                                    <input type="text" className="form-control" name="title" placeholder="Product name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Mot de passe</label>
                                    <input type="text" className="form-control" name="title" placeholder="Product name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirmer mot de passe</label>
                                    <input type="text" className="form-control" name="title" placeholder="Product name" />
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
export default UserInfo