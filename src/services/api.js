import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});
//http://localhost:3333
//https://foodexplorerbackendapisena.onrender.com