import axios from "axios";

// backend
const httpUser = axios.create({
  baseURL: "",
  headers: {
    "Content-type": "application/json"
  }
});


export default httpUser;
