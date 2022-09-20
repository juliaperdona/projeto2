import React from "react";


const Cadastro = () => {
    return <div id="cadastro">
        <h1 className="title">Cadastro</h1>
        
        <form action="" className="form">
            <div className="field">
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" name="" id="nome"/>
            </div>
            <div className="field">
                <label htmlFor="foto">Foto</label>
                <input type="url" name="" id="foto" />
            </div>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="field">
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" />
            </div>
            <div className="field">
                <label htmlFor="senha">Confirmação Senha</label>
                <input type="password" name="senha" id="senha" />
            </div>
            <div className="field">
                <label htmlFor="telefone">Telefone</label>
                <input type="number" name="telefone" id="telefone" />
            </div>

            <div id="endereco">
                <div className="field">
                    <label htmlFor="cep">CEP</label>
                    <input type="number" name="cep" id="cep" />
                </div>
                <div className="field">
                    <label htmlFor="endereço">Endereço</label>
                    <input type="text" name="endereco" id="endereco" />
                </div>
                <div className="field">
                    <label htmlFor="numero">Número</label>
                    <input type="number" name="numero" id="numero" />
                </div>
                <div className="field">
                    <label htmlFor="bairro">Bairro</label>
                    <input type="number" name="bairro" id="bairro" />
                </div>
                <div className="field">
                <label htmlFor="cidade">cidade</label>
                <input type="text" name="cidade" id="cidade" />
            </div>
            <div className="field">
                <label htmlFor="estado">Estado</label>
                <input type="text" name="estado" id="estado" />
            </div>
            <div className="field">
                <label htmlFor="complemento">Complemento</label>
                <input type="text" name="complemento" id="complemento" />
            </div>
            </div>



            <div className="action">
                <button type="submit">Entrar</button>
            </div>
            <div className="action">
                <button type="submit">Cadastrar</button>
            </div>
        </form>
    </div>
}

export default Cadastro