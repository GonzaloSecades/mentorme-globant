import { GET_SKILLS_LIST } from "../constants";
import axios from "axios";

export function getSkillsList() {
  return function (dispatch) {
    axios.get("/api/skills/").then((res) => {
      dispatch({ type: GET_SKILLS_LIST, payload: res.data });
    });
  };
}
