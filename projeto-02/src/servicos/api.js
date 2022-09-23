import axios from "axios";
import { createPath, useFetcher } from "react-router-dom";

export const api = axios.create({
    baseURL: "https://connectlab.onrender.com",
});

export const loginUsuario = async (email, password) => {
    return api.post("/auth/login", { email, password })
}

export const buscarUsuario = async () => {

const buscaUser = localStorage.getItem("user")
const buscarId = JSON.parse(buscaUser) 
const id = buscarId._id
const token = localStorage.getItem("token")

api.defaults.headers.Authorization = `Bearer ${token}`

// console.log(token)
// console.log(id)

return api.get(`/users/${id}`)
}