import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
import * as yup from 'yup';
import Styles from './cadastro.css'
import { api } from "../../servicos/api";

const Cadastro = () => {

    const schema = yup.object().shape({

        fullName: yup.string().min(2, "Nome inválido").required("Campo Obrigatório"),
        email: yup.string().email("O email inválido").required("Campo Obrigatório"),
        photoUrl: yup.string().url("Foto de perfil deve ser uma URL válida"),
        phone: yup.string(),
        password: yup.string().min(8, "A senha de ter pelo menos 8 caracteres").required("Campo Obrigatório"),
        //.matches(/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //"A senha precisa conter uma letra maiúscula, uma miscula, um caractere especial e um número"),
        confirmacaoSenha: yup.string().min(8, "A senha de ter pelo menos 8 caracteres")
        .oneOf([yup.ref("password"), null], "As senhas devem ser iguais").required(),
        zipCode: yup.string().min(8, "Minímo 8 números").max(10).required("Campo Obrigatório"),
        street: yup.string().required("Campo Obrigatório"),
        neighborhood: yup.string().required("Campo Obrigatório"),
        city: yup.string().required("Campo Obrigatório"),
        state: yup.string().required("Campo Obrigatório"),
        number: yup.string().required("Campo Obrigatório"),
        complement: yup.string(),
    });

    const { register, handleSubmit, setValue, setFocus, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const createUsuario = (value) => {


        const {
            email,
            password,
            fullName,
            photoUrl,
            phone,
            zipCode,
            street,
            number,
            neighborhood,
            city,
            state,
            complement,
        } = value

        api.post("/auth/register", {
            email,
            password,
            fullName,
            photoUrl,
            phone,
            userAddress: {
                zipCode,
                street,
                number,
                neighborhood,
                city,
                state,
                complement,
            }
        }).then((response) => {
            // alert(response.data.msg);
            console.log(response)
        }).catch((response) => {
            console.log("Erro" + response)
        })
    }

    const consultaApi = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setValue('street', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('state', data.uf);
            setFocus('number')

        });
    }

    return (
        <>

            <div className="title">
                <h1>Cadastrar</h1>

            </div>
            <form onSubmit={handleSubmit(createUsuario)}>
                <div className="form-cadastro">

                    <div className="info-pessoais">

                        <h3>Informações Pessoais</h3>
                        <div className="field">
                            <label>Nome Completo</label>
                            <input type="text" placeholder="Seu nome" {...register("fullName")} />
                            <small>{errors.fullName?.message}</small>

                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" placeholder="Seu e-mail"{...register("email")} />
                            <small>{errors.email?.message}</small>

                        </div>


                        <div className="field">
                            <label>Senha</label>
                            <input type="password" placeholder="Sua senha" {...register("password")} />
                            <small>{errors.password?.message}</small>

                        </div>
                        <div className="field">
                            <label>Confirmação de senha</label>
                            <input type="password" placeholder="Sua confirmação de senha" {...register("confirmacaoSenha")} />
                            <small>{errors.confirmacaoSenha?.message}</small>

                        </div>
                        <div className="field">
                            <label>URL foto perfil</label>
                            <input type="url" placeholder="Sua foto" {...register("photoUrl")} />

                        </div>

                        <div className="field">
                            <label>Telefone</label>
                            <input type="text" placeholder="(99) 9999-9999" {...register("phone")} />
                            <small>{errors.phone?.message}</small>

                        </div>


                    </div>


                    <div className="endereco">
                        <h3>Endereço</h3>
                        <div className="field">
                            <label>CEP</label>
                            <input type="text" placeholder="00000-000" maxLength="9"
                                {...register("zipCode")} onBlur={consultaApi} />
                            <small>{errors.zipCode?.message}</small>
                        </div>

                        <div className="field">
                            <label>Logradouro/Endereço</label>
                            <input type="text"
                                placeholder="Seu logradouro/endereço" {...register("street")} />
                            <small>{errors.street?.message}</small>
                        </div>
                        <div className="field">
                            <label>Bairro</label>
                            <input type="text"
                                placeholder="Seu bairro"  {...register("neighborhood")} />
                            <small>{errors.neighborhood?.message}</small>
                        </div>

                        <div className="field">
                            <label>Cidade</label>
                            <input type="text"
                                placeholder="Sua cidade"  {...register("city")} />
                            <small>{errors.city?.message}</small>
                        </div>
                        <div className="field">
                            <label>Estado</label>
                            <input type="text" placeholder="Seu estado" {...register("state")} />
                            <small>{errors.state?.message}</small>
                        </div>
                        <div className="field">
                            <label>Número</label>
                            <input type="string"
                                placeholder="Seu Número" {...register("number")} />
                            <small>{errors.number?.message}</small>
                        </div>
                        <div className="field">
                            <label>Complemento</label>
                            <input type="text" placeholder="Seu complemento"  {...register("complement")} />

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