import React, { useEffect, useState } from "react";
import { Navbar } from "../../componentes/navbar";
import styles from './dispositivos.css'
import Dispositivos from '../../componentes/renderDispositivos'


const AddDispositivo = () => {

 

    return (
        <>


            <Navbar />

           
            <div className="adc-disp">
                <h1>Dispositivos</h1>
                <label >Nome do dispositivo</label>
                <div className="buscar">

                    <input type="text" name="" id="" placeholder="Buscar pelo nome do dispositivo" />

                </div>

                <div className="todos-produtos">

                
                <Dispositivos/>



                </div>


            </div>
        </>
    )


}

export default AddDispositivo