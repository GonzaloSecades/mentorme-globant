import {LOGIN} from "../constants";
import axios from "axios";

export function login(email, password) {
  return function (dispatch) {
    axios.post("/api/auth/login", {email, password})
      .then((res) => {
        dispatch({type: LOGIN, payload: res.data.user})
        document.cookie = 'token=' + res.data.token;
      })
  }
}

export function me(token) {
  return function (dispatch) {
    axios.get('/api/auth/me', {headers: {Authorization: `Bearer ${token}`}})
    .then(res => dispatch({type: 'ME_LOGIN', payload: res.data}))
  }
}