import { LOGIN } from "../constants";
import axios from "axios";

export function login(email, password) {
  return function (dispatch) {
    axios.post("/api/auth/login", { email, password }).then((res) =>
      dispatch({
        type: LOGIN,
        payload: res.data,
      })
      .then((data)=>{
//guardar en la cookie
    })
    );
  };
}
