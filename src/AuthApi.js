import axios from "axios"
import jwtDecode from "jwt-decode"
import {useNavigate} from 'react-router-dom'

export function authenticate(identifier, password) {
  console.log(window.localStorage.getItem("authToken"))
  console.log(window.localStorage.getItem("username"))
    return axios
        .post(process.env.REACT_APP_BACK_URL + '/api/auth/local',
          {
            identifier: identifier,
            password: password,
          })
        .then(response => response.data)
        .then(data => {
            window.localStorage.setItem("authToken", data.jwt)
            window.localStorage.setItem('username', data.user.username)
            axios.defaults.headers["Authorization"] = "Bearer " + data.jwt
            console.log(isAuthenticated())

    })
}

export function isAuthenticated() {
    const token = window.localStorage.getItem("authToken")
    if (token) {
        const { exp } = jwtDecode(token)
        if (exp * 1000 > new Date().getTime()) {
            return true
        }
    }
    return false
}
