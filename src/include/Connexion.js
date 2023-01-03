import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar'
import Header from './Header'
import '../include/Inscription.scss'
import {
    BrowserRouter,
    Link,
  } from 'react-router-dom'

function Connexion() {
    // below function will be called when user
    // click on submit button .
    const handleSubmit = (e) => {
        if (password != confPassword) {
            alert("Connexion réussit")
        }
        e.preventDefault();
    }

    return (
                        <div className={'container-fluid m-0'}>
                            <div className={'row'}>
                                <div className="Axel">
                                    <header className="App-header">
                                        <form onSubmit={(e) => { handleSubmit(e) }}>
                                            <h2> CONNEXION</h2>
                                            <div className='form-group'>
                                                <label>Email: </label>
                                                <input type="email" className="form-control" /><br />
                                            </div>
                                            <div className='form-group'>
                                                <label>Password:</label>
                                                <input type="password" className="form-control" /><br />
                                            </div>      
                                            <div className='redirection'>
                                                <i><Link to = "/inscription">Vous n'avez pas de compte ? </Link></i>
                                            </div>                    
                                            <input type="submit" class="boutonVal" value="VALIDER" />
                                        </form>
                                    </header>
                                </div>
                            </div>
                        </div>
    );
}

export default Connexion;