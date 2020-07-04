import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'


class Categorias extends Component {
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
                "Categorias": "Katty",
                "Qtd. de Produtos": 25,
                "botaoDetalhes":"/categoria/Katty"
                
            },
            {
                "Categorias": "xcvcxv",
                "Qtd. de Produtos": 25,
                "botaoDetalhes":"/categoria/Katty Gostosa"

            },
            {
                "Categorias": "dfdsfsf",
                "Qtd. de Produtos": 25,
                "botaoDetalhes":"/categoria/Katty Tesao"

            },
            {
                "Categorias": "sfsfsf",
                "Qtd. de Produtos": 25,
                "botaoDetalhes":"/categoria/Katty Safada"

            },
            {
                "Categorias": "bhfusgfv",
                "Qtd. de Produtos": 25,
                "botaoDetalhes":"/categoria/Katty"

            }
            

        ]
        return (
            <div className="Categorias full-width">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Categorias" />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquise Aqui pelo nome da Categoria"}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")}
                    />
                    <br />
                    <Tabela
                        cabecalho={["Categorias", "Qtd. de Produtos"]}
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

export default Categorias;