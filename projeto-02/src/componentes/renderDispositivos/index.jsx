import React, { useContext, useEffect, useState } from "react";
import styles from '../renderDispositivos/styles.css'
import { renderDispositivo, adcDispUser } from "../../servicos/api";
import Modal from "react-modal"
import { AuthContext } from "../../contexts/auth";
Modal.setAppElement('#root')


const Dispositivos = () => {
    const [modalAberto, setModal] = useState(false)
    const [dispositivo, setDis] = useState([])
    const [loading, setLoading] = useState(true)
    const [busca, setBusca] = useState('');
    const [modalDisp, setModalDisp] = useState({})
    const [adcDisp, setAdcDisp] = useState({})
    const {user} = useContext(AuthContext)
    

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }
    const customStyles = {

        overlay: {
            backgroundColor: 'hsla(0, 0%, 0%, 0)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',

        },
    };


    const openModalDisp = (dispositivo) => {
        setModalDisp(dispositivo)
        openModal()
    }


    useEffect(() => {

        (async () => {
            const resposta = await renderDispositivo()
            setDis(resposta.data)
            setLoading(false)
        })();

    }, []);


    const filtroBusca = busca.toLocaleLowerCase();
    const dispFiltrado = dispositivo.filter((d) => {
        return d.name.toLowerCase().includes(filtroBusca)
    })

    useEffect(() => {

        (async () => {
            const resposta = await adcDispUser()
            setAdcDisp(resposta.data)
        })();

    }, []);


    const AdcConfirm = async () => {
       

        const addDispositivo = {
            user: user._id,
            device: dispositivo._id,
            is_on: false,
            local: "631b34696f2d2f24a7c0c960",
            room: "Quarto"
        };

        const enviar = await adcDispUser(addDispositivo);
        console.log(enviar)
        console.log("funcionou")
        

    }


    return (
        <>

            <div className="renderDisp">
                <div className="buscar">

                    <input type="text" placeholder="Buscar pelo nome do dispositivo" value={busca} onChange={(e) => setBusca(e.target.value)} />
                </div>
                <ul>
                    {
                        dispFiltrado.map((disp) =>
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
                                        <button onClick={() => openModalDisp(disp)}>Adicionar</button>


                                        <Modal
                                            isOpen={modalAberto}
                                            onRequestClose={closeModal}
                                            style={customStyles}>

                                            <form>
                                                <h1>{modalDisp.name}</h1>

                                                <div className="local">
                                                    <label>Local</label>
                                                    <select>
                                                        <option>Casa</option>
                                                        <option>Escritório</option>
                                                        <option>Fábrica</option>
                                                    </select>
                                                </div>

                                                <div className="comodo">
                                                    <label>Cômodo</label>
                                                    <input type="text" placeholder="Digite o nome do cômodo" />
                                                </div>

                                                <div className="botoes">
                                                <button onClick={closeModal}>Cancelar</button>
                                                <button onClick={() => AdcConfirm(modalDisp)}>Confirmar</button>
                                            </div>

                                            </form>



                                           


                                        </Modal>


                                    </div>
                                </div>
                            </div>


                        </li>))
                    }
                </ul>
            </div>

        </>
    )
}

export default Dispositivos