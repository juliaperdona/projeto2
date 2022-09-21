import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../../componentes/navbar";
import { Card } from "../../componentes/cards/card";
import styles from './home.css'




const HomePage = () => {
    return (





        
        <>
            <Navbar />
            <div className="clima">
                <div className="temp">
                    <h2>16ºC</h2>
                    <h3>Palhoça,SC</h3>
                </div>
                <div className="info-temp">
                    <h4> Sensação térmica: 16ºC - precipitação: 0mm - Chance de chuva: 0% </h4>
                </div>
            </div>

            <div className="filter">
                <button>Todos</button>

                <button>Casa</button>

                <button>Escritório</button>
            </div>

            <div className="todos-produtos">
                <Card />
                <Card />
                <Card />

            </div>

        </>
    )
}

export default HomePage