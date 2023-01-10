import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import '../include/Inscription.scss'
import AuthenticationContext from '../AuthenticationContext'
import axios from 'axios';

function DeliveryAddress() {   
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate()
    /*const context = useContext(AuthenticationContext)
    useEffect(() =>{
      console.log(context.isAuthenticated)
    }, [context.isAuthenticated])
    const disconnect = () =>{
      window.localStorage.removeItem("authToken", null)
      window.localStorage.removeItem('username', null)
      window.localStorage.removeItem('id', null)
      context.setIsAuthenticated(false)
      navigate('/')
    }*/

    // function to update state of name with
    // value enter by user in form
    const handleStreetChange = (e) => { setStreet(e.target.value); }

    // function to update state of email with value
    // enter by user in form
    const handleZipCodeChange = (e) => { setZipCode(e.target.value); }

    // function to update state of password with
    // value enter by user in form

    const handleCityChange = (e) => { setCity(e.target.value); }
    // function to update state of confirm password
    // with value enter by user in form
    const handleCountryChange = (e) => { setCountry(e.target.value); }

    // below function will be called when user
    // click on submit button .
    const handleSubmit = (e) => {
        axios.post(process.env.REACT_APP_BACK_URL + "/api/adresse-clients",
            {
                data:{
                    rue: street,
                    cdPostal: zipCode,
                    ville: city,
                    pays: country
                }
            }).then((res) => {
                alert("Saisie de vos données validées")
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
                            <h2> Mes Données de Livraison</h2>
                            <div className='form-group'>
                                <label> Rue: </label>
                                <input type="text" className="form-control" value={street} required onChange={(e) => { handleStreetChange(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Code Postal: </label>
                                <input type="text" className="form-control" maxLength={"5"} value={zipCode} required onChange={(e) => { handleZipCodeChange(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Ville:</label>
                                <input type="text" className="form-control" value={city} required onChange={(e) => { handleCityChange(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Pays:</label>
                                <input type="text" className="form-control" value={country} required onChange={(e) => { handleCountryChange(e) }} /><br />
                            </div>
                            <input type="submit" class="boutonVal" value="VALIDER" />
                        </form>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default DeliveryAddress;