import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import "./login.css";
import Cadastro from "../cadastro/cadastro"

const LoginPage = () => {

    const { autenticado, login} = useContext
    (AuthContext)


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const schema = yup.object().shape({

        email:yup.string().email("Email inválido").required(),
        password: yup.string().min(8).required(),
    });


    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });


       
    const entrar = (e) => {

        console.log("submit", { email, password })
        login(email, password)
    }

    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit(entrar)}>
                <div className="field">
                    {/* <p>{String(autenticado)}</p> */}
                    <label>Email</label>
                    <input type="email" name="email" id="email" 
                    placeholder="Insira seu e-mail"  {...register("email")} 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                     <small>{errors.email?.message}</small>
                </div>
                <div className="field">
                    <label>Senha</label>
                    <input type="password" name="password" id="senha" 
                    placeholder="Insira sua senha" {...register("password")} 
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <small>{errors.password?.message}</small>
                </div>
                <div className="action">
                    <button type="submit">Entrar</button>
                </div>
                <div className="action">
                    <Link to={Cadastro}>Cadastre-se</Link>
                    
                </div>
            </form>
        </div>
    );
}

export default LoginPage



