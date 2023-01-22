import React from 'react'
import Nav from '../include/Nav'
import { Link } from 'react-router-dom'
import * as url from '../include/var.js'
import './User.css'
import '../App.css'

function User() {

    return (
        <div>
            <div className="row">
                <div className="col">
                    <Nav />
                    <div className="table-responsive">
                        <div class="panel-heading undefined">
                            <h4 class="panel-title">Utilisateurs</h4>
                            <Link to={url.user_get}className="bi bi-person-add"></Link>
                        </div>
                        <div className='grid__user__user'>
                            <p className='grid__center'>Username</p>
                            <p className='grid__center'>Email Address</p>
                            <p className='grid__center'>Role</p>
                            <p className='grid__center'>Status</p>
                            <p className='grid__center'>Action</p>


                            <p className='grid__center'>Nicky Almera</p>
                            <p className='grid__center'>Nicky Almera</p>
                            <p className='grid__center'>nicky@hotmail.com</p>
                            <p className="form-switch grid__center">
                                <input className="form-check-input form-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </p>
                            <p className='grid__center' nowrap="true">
                                <Link to={url.user_get} className="btn btn-sm btn-primary w-60px me-1">Edit</Link>
                                <Link to="/table/basic" className="btn btn-sm btn-secondary w-60px">Delete</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
