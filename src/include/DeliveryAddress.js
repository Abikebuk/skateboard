import React, { useEffect, useState } from 'react'
import '../include/Inscription.scss'
import axios from 'axios';

function DeliveryAddress() {
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [addressChanged, setAddressChanged] = useState(false);

    const idUser = window.localStorage.getItem("id");
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        if (!loaded) {
            axios.get(process.env.REACT_APP_BACK_URL + `/api/users/${idUser}`)
                .catch((error) => {
                    console.log(error)
                })
                .then((res) => {
                    console.log(res)
                    const datas = res.data
                    setLastName(datas.lastname)
                    setFirstName(datas.firstname)
                    setStreet(datas.street)
                    setZipCode(datas.zipcode)
                    setCity(datas.city)
                })
            setLoaded(true)
        }
    })

    const handleLastName = (e) => { setLastName(e.target.value); }
    const handleFirstName = (e) => { setFirstName(e.target.value); }
    const handleStreet = (e) => { setStreet(e.target.value); }
    const handleZipCode = (e) => { setZipCode(e.target.value); }
    const handleCity = (e) => { setCity(e.target.value); }

    const handleSubmit = (e) => {
        axios.put(process.env.REACT_APP_BACK_URL + `/api/users/${idUser}`,
            {
                lastname: lastName,
                firstname: firstName,
                street: street,
                zipcode: zipCode,
                city: city
            }).then((res) => {
                console.log("TEST")
                setAddressChanged(true)
                console.res(res)

            }).catch((error) => {
                console.log("TEST")
                console.log(error)
            }
            )
    }

    return (
        <div className={'container-fluid m-0'}>
            <div className={'row'}>
                <div className="Axel">
                    <header className="App-header">
                        <form onSubmit={(e) => { handleSubmit(e) }}>
                            <h1 className='delivery2'>Données de Livraison</h1>
                            {addressChanged ?
                                <div>Adresse changée</div>
                                : null
                            }
                            <div className='form-group'>
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

export default DeliveryAddress;