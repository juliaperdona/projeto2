import React, {Children, useContext} from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./contexts/auth";
import LoginPage from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import HomePage from "./pages/Home";
import Dispositivos from './pages/addDisp/dispositivos'
import Perfil from './pages/perfil/perfil'

const Rotas = () => {


    const Privado = ({children}) => {

        const {autenticado, loading} = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!autenticado) {
            return <Navigate to="/login"/>;
        }

        return children;

    }

    return (

        <BrowserRouter>
    
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/" element={ <Privado> <HomePage /> </Privado>} />
                    <Route exact path="/dispositivos" element={ <Privado> <Dispositivos/> </Privado>} />
                    <Route exact path="/perfil" element={<Privado> <Perfil/> </Privado>} />
                </Routes>
            </AuthProvider>

        </BrowserRouter>

    )
}

export default Rotas