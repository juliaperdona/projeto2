import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import Dispositivos from './pages/addDisp/dispositivos'
import Perfil from './pages/perfil/perfil'

const Rotas = () => {
    return(
        
        <BrowserRouter>

        <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/dispositivos" element={<Dispositivos/>} />
                <Route path="/perfil" element={<Perfil/>} />

        </Routes>
        
       
        
        </BrowserRouter>
        
    )
}

export default Rotas