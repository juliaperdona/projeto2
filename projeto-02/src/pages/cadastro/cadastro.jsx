import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup"
import * as yup from 'yup';
import Styles from './cadastro.css'

const Cadastro = () => {

    const schema = yup.object().shape({

        name: yup.string().min(15).required("Campo Obrigatório"),
        email: yup.string().email().required("Campo Obrigatório"),
        foto: yup.string().url(),
        telefone: yup.string().min(11),
        senha: yup.string().min(8).required("Campo Obrigatório"),
        confirmacaoSenha: yup.string().oneOf([yup.ref("senha"), null], "As senhas devem ser iguais").min(8).required("Campo Obrigatório"),
        cep: yup.string().min(8,"Minímo 8 números").max(10).required("Campo Obrigatório"),
        logradouro: yup.string().required("Campo Obrigatório"),
        bairro: yup.string().required("Campo Obrigatório"),
        localidade: yup.string().required("Campo Obrigatório"),
        estado: yup.string().required("Campo Obrigatório"),
        numeroCasa: yup.string().required("Campo Obrigatório"),
        complemento: yup.string(),
    });

    const { register, handleSubmit, setValue, setFocus, formState:{errors} } = useForm({
        resolver: yupResolver(schema),
    });

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
                            <input type="text" placeholder="Seu nome" name="nome" {...register("nome")} />
                            <small>{errors.nome?.message}</small>
                            
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" placeholder="Seu e-mail" name="email"{...register("e-mail")} />
                            
                        </div>
                        <div className="field">
                            <label>URL foto perfil</label>
                            <input type="url" placeholder="Sua foto" name="foto"{...register("foto")}/>
                            
                        </div>
                        <div className="field">
                            <label>Telefone</label>
                            <input type="text" name="telefone" id="telefone" placeholder="(48) 9999-9999" {...register("telefone")} />
                          
                        </div>
                        <div className="field">
                            <label>Senha</label>
                            <input type="password" name="senha" id="password" placeholder="Sua senha" {...register("senha")} />
                            
                        </div>
                        <div className="field">
                            <label>Confirmação de senha</label>
                            <input type="password" name="confirmacaoSenha" id="password-confirm" placeholder="Sua confirmação de senha" {...register("confirmacao-senha")} />
                            
                        </div>
                    </div>


                    <div className="endereco">
                        <h3>Endereço</h3>
                        <div className="field">
                            <label>CEP</label>
                            <input type="text" name="cep" id="cep" placeholder="00000-000" maxLength="9" 
                            {...register("cep")} onBlur={consultaApi} />
                        </div>
                        <div className="field">
                            <label>Logradouro/Endereço</label>
                            <input type="text" name="logradouro" id="logradouro" placeholder="Seu logradouro/endereço" {...register("logradouro")} />
                        </div>
                        <div className="field">
                            <label>Bairro</label>
                            <input type="text" name="bairro" id="bairro" placeholder="Seu Bairro"  {...register("bairro")} />
                        </div>

                        <div className="field">
                            <label>Cidade</label>
                            <input type="text" name="localidade" id="localidade" placeholder="Sua cidade"  {...register("localidade")} />
                        </div>
                        <div className="field">
                            <label>Estado</label>
                            <input type="text" name="estado" id="uf" placeholder="Seu estado" {...register("uf")} />
                        </div>
                        <div className="field">
                            <label>Número</label>
                            <input type="number" name="numeroCasa" id="numero-casa" placeholder="Seu Número" {...register("numero-casa")} />
                        </div>
                        <div className="field">
                            <label>Complemento</label>
                            <input type="text" name="complemento" id="complemento" placeholder="Seu complemento" />

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