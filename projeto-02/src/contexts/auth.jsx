import React, { useState, useEffect ,createContext } from "react";

import {api, createUsuario} from "../servicos/api";

import { set } from "react-hook-form";

import { Form, useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const usuarioCadastrado = localStorage.getItem("user");

        if(usuarioCadastrado){
            setUser(JSON.parse(usuarioCadastrado))
        }

        setLoading(false)
    }, []);


    const login = async (email, password) => {


        const resposta = await createUsuario(email, password)

        console.log('login', resposta.data)

        const usuarioLogado = resposta.data.user;
        const token = resposta.data.token
        
        localStorage.setItem("user", JSON.stringify(usuarioLogado));
        localStorage.setItem("token", token)

        api.defaults.headers.Authorization = `Bearer ${token}`;

        // if (password === "secret00" ) {  //mudar senha dps 
            setUser(usuarioLogado)
            navigate("/")
       // }


    };

    const sair = () => {
        console.log("sair")
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login")
    };


    return (
        <AuthContext.Provider value={{ autenticado: !!user, user, loading, login, sair }}>

            {children}

        </AuthContext.Provider>
    )
}