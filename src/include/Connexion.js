import React, {useContext, useState} from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import '../include/Inscription.scss'
import {
  BrowserRouter,
  Link, useNavigate,
} from 'react-router-dom'
import {authenticate} from '../AuthApi'
import {navi} from './var'
import AuthenticationContext from '../AuthenticationContext'

function Connexion() {
  const navigate = useNavigate();
  const context = useContext(AuthenticationContext)
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("")
  const [wrongId, setWrongId] = useState(false)

  const handleIdentifierChange = (e) => { setIdentifier(e.target.value) }
  const handlePasswordChange = (e) => { setPassword(e.target.value) }
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    e.preventDefault()
      authenticate(identifier, password)
        .catch((res) =>{
          const responseData = res.response.data
          const {message, status} = responseData.error
          console.log(responseData)
          console.log(message, status)
          switch (status){
            case 400:
              switch (message){
                case "Invalid identifier or password":
                  setWrongId(true)
                  console.log(wrongId)
                  break
                default :
                  console.log("ERROR 400")
                  console.log(responseData)
              }
              break;
            default :
              console.log("AN ERROR OCCURED")
              console.log(responseData)
          }
        }).then(()=>{
          context.setIsAuthenticated(true)
          navigate("/")
        }
      )
  }
  return (
    <div className={'container-fluid m-0'}>
      <div className={'row'}>
        <div className="Axel">
          <header className="App-header">
            <form onSubmit={handleSubmit}>
              <h2> CONNEXION</h2>
              {wrongId ? <label id={"password-error"}>L'identifiant ou le mot de passe est erroné.</label> : null}
              <div className='form-group'>
                <label>Email: </label>
                <input type="email" className="form-control" onChange={handleIdentifierChange}/><br />
              </div>
              <div className='form-group'>
                <label>Password:</label>
                <input type="password" className="form-control" onChange={handlePasswordChange}/><br />
              </div>
              <div className='redirection'>
                <i><Link to = "/inscription">Vous n'avez pas de compte ? </Link></i>
              </div>
              <input type="submit" class="boutonVal" value="VALIDER" onClick={(e) => {console.log("click")}} />
            </form>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Connexion
