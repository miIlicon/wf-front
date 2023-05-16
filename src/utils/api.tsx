import axios from "axios";

const API = axios.create({
  baseURL: "http://api.withfestival.site:8080",
});

export default API;
