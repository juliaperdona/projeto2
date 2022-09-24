import React from "react";
import Logo from '../img/icon.svg'
import styles from './card.css'


export const Card = () => {
    return (
        <>

            

                <div className="produto">
                    <div className="foto">
                        <img src={Logo} alt="" />
                    </div>
                    <div>
                        <div className="nome-item">
                            <h1>ITEM</h1>
                        </div>

                        <div className="info-card">
                            <h4>Casa</h4>
                            <h4>Quarto</h4>
                            <h4>ON</h4>
                        </div>
                    </div>
                    <div>
                        <button>ON/OFF</button>
                    </div>

                </div>
           

        </>
    )
}