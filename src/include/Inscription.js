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
    const navigate = useNavigate();

    // function to update state of name with
    // value enter by user in form
    const handleChange = (e) => { setName(e.target.value); }

    // function to update state of email with value
    // enter by user in form
    const handleEmailChange = (e) => { setEmail(e.target.value); }

    // function to update state of password with
    // value enter by user in form

    const handlePasswordChange = (e) => { setPassword(e.target.value); }
    // function to update state of confirm password
    // with value enter by user in form
    const handleConfPasswordChange = (e) => { setConfPassword(e.target.value); }

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
                dtInscription: Date.now()
            }).then((res) => {
                console.log("TEST")
                navigate("/")
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
                            <input type="submit" class="boutonVal" value="VALIDER" />
                        </form>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default Inscription;