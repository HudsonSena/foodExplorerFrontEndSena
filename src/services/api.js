import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorerbackendapisena.onrender.com",
  withCredentials: true,
});
//http://localhost:3333
//https://foodexplorerbackendapisena.onrender.com
