import React, { useEffect, useState } from "react";
import styles from '../renderDispositivos/styles.css'
import { renderDispositivo } from "../../servicos/api";
import Modal from "react-modal"


Modal.setAppElement('#root')


const ModalAdd = () => {

    const [modalAberto, setModal] = useState(false)

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

    return (
        <>

            <Modal
                isOpen={modalAberto}
                onRequestClose={closeModal}
                style={customStyles}>

                <form>
                    <h1>Nome dispositivo</h1>

                    <div className="local">
                        <label>Local</label>
                        <select>
                            <option>Casa</option>
                            <option>Escritório</option>
                        </select>
                    </div>

                    <div className="comodo">
                        <label>Cômodo</label>
                        <input type="text" placeholder="Digite o nome do cômodo" />
                    </div>

                </form>



                <div className="botoes">
                    <button onClick={closeModal}>Cancelar</button>
                    <button>Confirmar</button>
                </div>


            </Modal>

        </>
    )
}

export default ModalAdd
