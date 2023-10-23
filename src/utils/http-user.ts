import axios from "axios";

const httpUser = axios.create({
  baseURL: "54.71.150.144.8082/",
  headers: {
    "Content-type": "application/json"
  }
});


export default httpUser;
