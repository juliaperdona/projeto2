import React, { useEffect, useState } from "react";
import { Navbar } from "../../componentes/navbar";
import styles from './dispositivos.css'
import Dispositivos from '../../componentes/renderDispositivos'
import { renderDispositivo } from "../../servicos/api";





const AddDispositivo = () => {


    return (
        <>

            <Navbar />

            <div className="adc-disp">
                <h1>Dispositivos</h1>
                <div className="todos-produtos">
                    
                    <Dispositivos/>
                </div>


            </div>
        </>
    )


}

export default AddDispositivo