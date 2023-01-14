import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar'
import Header from './Header'
import '../include/Inscription.scss'

import axios from 'axios';

function Inscription() {    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => { setName(e.target.value); }
    const handleEmailChange = (e) => { setEmail(e.target.value); }
    const handlePasswordChange = (e) => { setPassword(e.target.value); }
    const handleConfPasswordChange = (e) => { setConfPassword(e.target.value); }
    const handleLastName = (e) => { setLastName(e.target.value); }
    const handleFirstName = (e) => { setFirstName(e.target.value); }
    const handleStreet = (e) => { setStreet(e.target.value); }
    const handleZipCode = (e) => { setZipCode(e.target.value); }
    const handleCity = (e) => { setCity(e.target.value); }

    // below function will be called when user
    // click on submit button .
    const handleSubmit = (e) => {
        if (password != confPassword) {
            alert("Les password sont différents")
        }
        else {
            axios.post(process.env.REACT_APP_BACK_URL + "/api/users",
            {
                username: name,
                email: email,
                password: password,
                dtInscription: Date.now(),
                lastname: lastName,
                firstname: firstName,
                street: street,
                zipcode: zipCode,
                city: city
            }).then((res) => {
                console.log("TEST")
                navigate("/connexion")

            }).catch((error)=>{
                const resp = error.response.data.error
                console.log(resp)
                switch (resp.status){
                    case 400:
                        switch (resp.message) {
                            case "password must be at least 6 characters":
                                alert("Le mot de passe doit contenir plus de 6 caractères")
                                break;
                            case "Email already taken":
                                alert("Email déjà existant")
                                break;
                            case "This attribute must be unique":
                                alert("Username déjà existant")
                                break;
                            default:
                                alert("400")
                            break;
                        }
                        break
                    default:
                        alert("Une erreur s'est produite")
                    break;
                }
            })
        }
        e.preventDefault();
    }
    useEffect(() => {
        console.log()
    })

    return (
        <div className={'container-fluid m-0'}>
            <div className={'row'}>
                <div className="Axel">
                    <header className="App-header">
                        <form onSubmit={(e) => { handleSubmit(e) }}>
                            <h2> INSCRIPTION</h2>
                            <div className='form-group'>
                                <h3>Données de Connexion</h3>
                                <label> Username: </label>
                                <input type="text" className="form-control" value={name} required onChange={(e) => { handleChange(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Email: </label>
                                <input type="email" className="form-control" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Password:</label>
                                <input type="password" className="form-control" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Confirm Password:</label>
                                <input type="password" className="form-control" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <h3 className='delivery'>Données de Livraison</h3>
                                <label>Nom:</label>
                                <input type="text" className="form-control" value={lastName} required onChange={(e) => { handleLastName(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Prénom:</label>
                                <input type="text" className="form-control" value={firstName} required onChange={(e) => { handleFirstName(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Adresse:</label>
                                <input type="text" className="form-control" value={street} required onChange={(e) => { handleStreet(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Code Postal:</label>
                                <input type="text" className="form-control" maxLength={"5"} value={zipCode} required onChange={(e) => { handleZipCode(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Ville:</label>
                                <input type="text" className="form-control" value={city} required onChange={(e) => { handleCity(e) }} /><br />
                            </div>
                            <input type="submit" class="boutonVal" value="VALIDER" />
                        </form>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default Inscription;