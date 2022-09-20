import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers"
import * as yup from "yup"
import Styles from './cadastro.css'
import { Navbar } from "../../componentes/navbar";


const Cadastro = () => {

    const schema = yup.object().shape({

    });




    const { register, handleSubmit, setValue, setFocus } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    const consultaApi = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setValue('logradouro', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('localidade', data.localidade);
            setValue('uf', data.uf);
            setFocus('numero-casa')

        });
    }

    return (
        <>

            <div className="title">
                <h1>Cadastrar</h1>

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-cadastro">

                    <div className="info-pessoais">

                        <h3>Informações Pessoais</h3>
                        <div className="field">
                            <label>Nome Completo</label>
                            <input type="text" placeholder="Seu nome" name="nome"{...register("nome")} />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" placeholder="Seu e-mail" name="email"{...register("e-mail")} />
                        </div>
                        <div className="field">
                            <label>URL foto perfil</label>
                            <input type="url" placeholder="Sua foto" />
                        </div>
                        <div className="field">
                            <label>Telefone</label>
                            <input type="text" name="" id="telefone" placeholder="(48) 9999-9999" {...register("telefone")} />
                        </div>
                        <div className="field">
                            <label>Senha</label>
                            <input type="password" name="" id="password" placeholder="Sua senha" {...register("senha")} />
                        </div>
                        <div className="field">
                            <label>Confirmação de senha</label>
                            <input type="password" name="" id="password-confirm" placeholder="Sua confirmação de senha" {...register("confirmacao-senha")} />
                        </div>
                    </div>


                    <div className="endereco">
                        <h3>Endereço</h3>
                        <div className="field">
                            <label>CEP</label>
                            <input type="text" name="" id="cep" placeholder="00000-000" maxLength="9" 
                            {...register("cep")} onBlur={consultaApi} />
                        </div>
                        <div className="field">
                            <label>Logradouro/Endereço</label>
                            <input type="text" name="" id="logradouro" placeholder="Seu logradouro/endereço" {...register("logradouro")} />
                        </div>
                        <div className="field">
                            <label>Bairro</label>
                            <input type="text" name="" id="bairro" placeholder="Seu Bairro"  {...register("bairro")} />
                        </div>

                        <div className="field">
                            <label>Cidade</label>
                            <input type="text" name="" id="localidade" placeholder="Sua cidade"  {...register("localidade")} />
                        </div>
                        <div className="field">
                            <label>Estado</label>
                            <input type="text" name="" id="uf" placeholder="Seu estado" {...register("uf")} />
                        </div>
                        <div className="field">
                            <label>Número</label>
                            <input type="number" name="" id="numero-casa" placeholder="Seu Número" {...register("numero-casa")} />
                        </div>
                        <div className="field">
                            <label>Complemento</label>
                            <input type="text" name="" id="complemento" placeholder="Seu complemento" />

                        </div>



                    </div>
                </div>
                <div className="botoes">
                    <button type="submit">Cadastrar</button>

                    <a href="">Login</a>
                </div>
            </form>

        </>

    )
}

export default Cadastro;