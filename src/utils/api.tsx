import axios from "axios";

const API = axios.create({
  baseURL: "http://withfestival.site:8080",
});

export default API;
