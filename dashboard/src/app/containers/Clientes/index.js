import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'


class Clientes extends Component {
    state = {
        pesquisa: "",
        atual: 0
    }
    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value })
    changeNumeroAtual = (atual) => this.setState({ atual })
    //dados



    render() {
        const pesquisa = this.state;

        const dados = [
            {
                "Cliente": "João Bosco",
                "E-mail": "js75819@goc.com.br",
                "Telefone": "11 991821203",
                "CPF": "082.939.225-23",
                "botaoDetalhes":"/cliente/js75819@gmail.com"

            },
            {
                "Cliente": "João Ladeia",
                "E-mail": "js75819@goc.com.br",
                "Telefone": "11 991821203",
                "CPF": "082.939.225-23",
                "botaoDetalhes":"/cliente/js75819@gmail.com"

            },
            {
                "Cliente": "João Bosco",
                "E-mail": "js75819@goc.com.br",
                "Telefone": "11 991821203",
                "CPF": "082.939.225-23",
                "botaoDetalhes":"/cliente/js75819@gmail.com"

            },
            {
                "Cliente": "João Bosco",
                "E-mail": "js75819@goc.com.br",
                "Telefone": "11 991821203",
                "CPF": "082.939.225-23",
                "botaoDetalhes":"/cliente/js75819@gmail.com"

            }

        ]
        return (
            <div className="Clientes full-width">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Clientes" />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquise Aqui pelo nome do cliente"}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")}
                    />
                    <br />
                    <Tabela
                        cabecalho={["Cliente", "E-mail", "Telefone", "CPF"]}
                        dados={dados} />
                    <Paginacao
                        atual={this.state.atual}
                        total={120}
                        limite={20}
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
                    />
                </div>

            </div>
        );
    }
}

export default Clientes;