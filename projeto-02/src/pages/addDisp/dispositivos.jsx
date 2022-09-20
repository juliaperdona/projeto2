import React from "react";
import { Card } from "../../componentes/cards/card";
import { Navbar } from "../../componentes/navbar";
import styles from './dispositivos.css'

const AddDispositivo = () => {
    return (
        <>
            <Navbar />
            <div className="adc-disp">
                <h1>Dispositivos</h1>
                <label htmlFor="">Nome do dispositivo</label>
                <div className="buscar">

                    <input type="text" name="" id="" placeholder="Buscar pelo nome do dispositivo" />
                    
                </div>

                <div className="todos-produtos">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>


            </div>
        </>
    )


}

export default AddDispositivo