import React, { useEffect, useState } from "react";
import { renderDispositivo } from "../../servicos/api";
import styles from '../renderDispositivos/styles.css'

const Dispositivos = () => {
    const [dispositivo, setDis] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        (async () => {
            const resposta = await renderDispositivo()
            setDis(resposta.data)
            setLoading(false)
        })();

    }, []);

    console.log(dispositivo)

    return (
        <>
            <ul>
                {
                    dispositivo.map((disp) =>
                    (<li key={disp._id}>


                        <div className="dispositivo">
                            <div className="foto">
                                <img src={disp.photoUrl} />
                            </div>

                            <div className="info">
                                <div className="nome-dispositivo">
                                    <h3>{disp.name}</h3>
                                </div>
                                <div className="botao">
                                    <button>Adicionar</button>
                                </div>
                            </div>
                        </div>


                    </li>))
                }
            </ul>

        </>
    )
}

export default Dispositivos