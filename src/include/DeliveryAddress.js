import React, {useEffect, useState} from 'react'
import '../include/Inscription.scss'
import axios from 'axios';

function DeliveryAddress() {   
    const [street, setStreet] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [ids, setIds] = useState(null);
    const [datas, setDatas] = useState()
    const [addressChanged, setAddressChanged] = useState(false);
    
    const idUser = window.localStorage.getItem("id");
    const [loaded, setLoaded] = useState(false);
    

    useEffect(()=> {
        if (!loaded){
            axios.get(process.env.REACT_APP_BACK_URL + `/api/adresse-clients?populate[0]=user`)
            .catch((error) => {
                console.log(error)
            })
            .then((res) => {
                console.log(res.data.data)
                
                const data = res.data.user
                const data2 = res.data
                
                if (data) {
                    setIds(data.id)
                    //setStreet(data.rue)
                    //setZipCode(data.cdPostal)
                    //setCity(data.ville)
                    //setCountry(data.pays)
                    //setDatas(true)
                    console.log(data + '---------')
                }
                
                else
                    setDatas(false)
            })
            
            setLoaded(true)
        }
    })


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
        if (datas === true) {
            axios.put(process.env.REACT_APP_BACK_URL + `/api/adresse-clients/${id}`,
            {
                data:{
                    rue: street,
                    cdPostal: zipCode,
                    ville: city,
                    pays: country
                }
            }).then((res) => {
                console.log("VALIDATION INSERT")
                setAddressChanged(true)
            }).catch((error)=>{
                console.log("ERREUR INSERT")
                console.log(error)
            })
        }
        else {
            axios.post(process.env.REACT_APP_BACK_URL + `/api/adresse-clients/`,
            {
                data:{
                    rue: street,
                    cdPostal: zipCode,
                    ville: city,
                    pays: country,
                    user: {
                        id: idUser,
                    }
                }
            }).then((res) => {
                console.log("VALIDATION INSERT")
                setAddressChanged(true)
            }).catch((error)=>{
                console.log("ERREUR INSERT")
                console.log(error)
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
                        <form>
                            <h2> Mes Données de Livraison</h2>
                            {addressChanged ?
                                <div>Adresse changée</div>
                                :null
                            }
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
                            <input type="submit" class="boutonVal" value="VALIDER" onClick={(e) => { handleSubmit(e) }}/>
                        </form>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default DeliveryAddress;