import React, {useContext, useEffect, useState} from "react";
import styles from './perfil.css'
import Logo from '../perfil/img/icon.svg'
import { Navbar } from "../../componentes/navbar";
import { AuthContext } from "../../contexts/auth";
import { buscarUsuario } from "../../servicos/api";

const Perfil = () => {
        const {sair} = useContext(AuthContext);

        const logout = () => {
            sair()
        }

        const [user, setUser] = useState([])
        const [loading, setLoading] = useState(true)


        useEffect(() =>{
            (async () => {
                const resposta = await buscarUsuario()
                setUser(resposta.data)
                setLoading(false)
                
            })();

        }, []);




    return (
        <>
            <Navbar />
            <div className="card-perfil">


                <div className="perfil">
                    <div className="nome-foto">
                        <img src={user.photoUrl} />
                        <h2>{user.fullName}</h2>
                    </div>
                    <div className="email-telefone">
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>

                    <div className="endereco">
                        <br />
                        <h4>Endereço</h4>
                        <br />
                        {/* <p>{user.userAddress.zipCode}</p>
                        <p>{user.userAddress.street},{user.userAddress.number}</p>
                        <p>{user.userAddress.neighborhood} - {user.userAddress.state}</p> */}

                        
                    </div>

                    <div className="botoes">
                        <button>Editar</button>
                        <a onClick={logout}>Sair</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Perfil