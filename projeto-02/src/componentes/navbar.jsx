import React from "react";
import styles from './navbar.css'
import Icon from './img/icon.svg'

import { Route, BrowserRouter, Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Icon} />
                <div className="title">
                    <h2>Connect Lab</h2>
                </div>
            </div>
            <div className="buttons">

                <div className="button">
                    <Link to="/"><button>Home</button></Link>
                </div>
                <div className="button">
                    <Link to="/perfil"><button>Perfil</button></Link>
                </div>
                <div className="button">
                    <Link to="/dispositivos"><button>Dispositivos</button></Link>
                </div>

            </div>

        </div>
    )
}

export default Navbar