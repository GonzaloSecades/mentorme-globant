import axios from "axios"
import { LOGIN } from "../constants"

export function register(user) {
  return axios
    .post("/api/auth/register", user)
    .then(() => console.log("User created succesfully!"))
    .catch((err) => {
      if (err.response) {
        // el cliente recibió un error (5xx o 4xx)
        // mostrar un 404
      } else if (err.request) {
        // client never received a response, or request never left
      } else {
        // cualquier otro error no tiene nada que ver con el axios y debe haber otro error en algun lado de la app
      }
    })
}

export function login(email, password) {
  return (dispatch) =>
    axios.post("/api/auth/login", { email, password }).then((res) => {
      dispatch({ type: LOGIN, payload: res.data.user })
      document.cookie = `token=${res.data.token}`
    })
}

export function me(token) {
  return (dispatch) => {
    axios
      .get("/api/auth/me", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => dispatch({ type: "ME_LOGIN", payload: res.data }))
  }
}

export const logout = () => (dispatch) => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  return dispatch({ type: "LOGOUT", payload: {} })
}
