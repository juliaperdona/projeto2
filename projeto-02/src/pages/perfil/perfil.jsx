import React from "react";
import styles from './perfil.css'
import Logo from '../perfil/img/icon.svg'
import { Navbar } from "../../componentes/navbar";

const Perfil = () => {
    return (
        <>
            <Navbar />
            <div className="card-perfil">


                <div className="perfil">
                    <div className="nome-foto">
                        <img src={Logo} />
                        <h2>Nome completo</h2>
                    </div>
                    <div className="email-telefone">
                        <p>email@gmail.com</p>
                        <p>(xx)xxxx-xxxx</p>
                    </div>

                    <div className="endereco">
                        <br />
                        <h4>Endereço</h4>
                        <br />
                        <p>00.000-000</p>
                        <p>rua pipipipi, algum lugar do mundo</p>
                    </div>

                    <div className="botoes">
                        <button>Editar</button>
                        <a href="">Sair</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Perfil