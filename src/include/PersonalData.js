import React, { useEffect, useState } from 'react'
import '../include/Inscription.scss'
import axios from 'axios';

function PersonalData() {
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
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
                    console.log("TEST RECUPERATION")
                    console.log(res)
                    const datas = res.data
                    setUserName(datas.username)
                    setUserMail(datas.email)
                })
            setLoaded(true)
        }
    })

    const handleUserName = (e) => { setUserName(e.target.value); }
    const handleUserMail = (e) => { setUserMail(e.target.value); }
    const handlePassword = (e) => { setPassword(e.target.value); }
    const handleConfPassword = (e) => { setConfPassword(e.target.value); }

    const handleSubmit = (e) => {
        if (password != confPassword) {
            alert("Les password sont différents")
        }
        else {
            axios.put(process.env.REACT_APP_BACK_URL + `/api/users/${idUser}`,
                {
                    username: userName,
                    email: userMail,
                    password: password
                }).then((res) => {
                    console.log("TEST1")
                    setAddressChanged(true)
                    console.res(res)

                }).catch((error) => {
                    console.log("TEST2")
                    console.log(error)
                }
                )
        }
    }

    return (
        <div className={'container-fluid m-0'}>
            <div className={'row'}>
                <div className="Axel">
                    <header className="App-header">
                        <form onSubmit={(e) => { handleSubmit(e) }}>
                            <h1 className='delivery2'>Données Personnelles</h1>
                            {addressChanged ?
                                <div>Données Personnelles changées</div>
                                : null
                            }
                            <div className='form-group'>
                                <label>Username:</label>
                                <input type="text" className="form-control" value={userName} required onChange={(e) => { handleUserName(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Email:</label>
                                <input type="text" className="form-control" value={userMail} required onChange={(e) => { handleUserMail(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Nouveau Password:</label>
                                <input type="password" className="form-control" value={password} required onChange={(e) => { handlePassword(e) }} /><br />
                            </div>
                            <div className='form-group'>
                                <label>Confirm Password:</label>
                                <input type="password" className="form-control" value={confPassword} required onChange={(e) => { handleConfPassword(e) }} /><br />
                            </div>
                            <input type="submit" class="boutonVal" value="VALIDER" />
                        </form>
                    </header>
                </div>
            </div>
        </div>
    );
}

export default PersonalData;