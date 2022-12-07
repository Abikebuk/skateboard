import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar'
import Header from './Header'
import '../include/Inscription.scss'

function Inscription() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [verifPassword, setVerifPassword] = useState('');

    // function to update state of name with
    // value enter by user in form
    const handleChange = (e) => { setName(e.target.value); }

    // function to update state of age with value
    // enter by user in form
    const handleAgeChange = (e) => { setAge(e.target.value); }

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
            setVerifPassword("Mot de passe différent")
        }
        else {

        }
        e.preventDefault();
    }

    return (
        <div id={'home'}>
            <div className={'container-fluid p-0'}>
                <div className={'row p-0 m-0'}>
                    <div className={'col-auto p-0'}>
                        <Sidebar />
                    </div>
                    <div id={'content'} className={'col p-0'}>
                        <Header ></Header>
                        <div className={'container-fluid'}>
                            <div className={'row'}>
                                <div className="Axel">
                                    <header className="App-header">
                                        <form onSubmit={(e) => { handleSubmit(e) }}>
                                            {/*when user submit the form , handleSubmit() function will be called .*/}
                                            <h2> Geeks For Geeks </h2>
                                            <p>{verifPassword}</p>
                                            <div className='form-group'>
                                                <label> Name: </label>
                                                <input type="text" className="form-control mx-sm-3 fix-margin" value={name} required onChange={(e) => { handleChange(e) }} /><br />
                                                { /*when user write in name input box , handleChange() function will be called. */}
                                            </div>
                                            <div className='form-group'>
                                                <label > Age:</label>
                                                <input type="text" className="form-control mx-sm-3 fix-margin" value={age} required onChange={(e) => { handleAgeChange(e) }} /><br />
                                                { /*when user write in age input box , handleAgeChange() function will be called. */}
                                            </div>
                                            <div className='form-group'>
                                                <label>Email: </label>
                                                <input type="email" className="form-control mx-sm-3 fix-margin" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
                                                {/* when user write in email input box , handleEmailChange() function will be called.*/}
                                            </div>
                                            <div className='form-group'>
                                                <label>Password:</label>
                                                <input type="password" className="form-control mx-sm-3 fix-margin" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
                                                {/* when user write in password input box , handlePasswordChange() function will be called.*/}
                                            </div>
                                            <div className='form-group'>
                                                <label>Confirm Password:</label>
                                                <input type="password" className="form-control mx-sm-3 fix-margin" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
                                                {/* when user write in confirm password  input box , handleConfPasswordChange() function will be called.*/}
                                            </div>                                    
                                            <input type="submit" class="btn btn-primary" value="Inscription" />
                                        </form>
                                    </header>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inscription;