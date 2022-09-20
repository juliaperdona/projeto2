import React, {useState} from "react";
import "./login.css";

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    const login = (e) => {
        e.preventDefault();
        console.log("submit", {email, password})
    }
   
   
    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <form action="" className="form" onSubmit={login}>
                {/* <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Insira seu e-mail"  {...register("EMAIL')} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" placeholder="Insira sua senha" {...register("password")} value={password} onChange={(e) => setPassword(e.target.value)} />
                </div> */}
                <div className="action">
                    <button type="submit">Entrar</button>
                </div>
                <div className="action">
                    <a href="">Cadastrar</a>
                </div>
            </form>
        </div>
    );
}

export default LoginPage