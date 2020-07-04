import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples'


class Produtos extends Component {
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
                "Produto": "Boceta",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDetalhes":"/produto/lmgkgog"

            },
            {
                "Produto": "Boceta",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDetalhes":"/produto/lmgsdsdkgog"

            },
            {
                "Produto": "Boceta",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDetalhes":"/produto/dsdsdsddddgog"

            },
            {
                "Produto": "Boceta",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDetalhes":"/produto/lmgkdfgvfgog"

            },
            {
                "Produto": "Boceta",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDetalhes":"/produto/lmgkfgffgog"

            }
      
        

        ]
        return (
            <div className="Produtos full-width">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Produtos" />
                    <br />
                    <div className="flex">
                        <div className="flex-3">
                        <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquise Aqui pelo nome do produto"}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")}/>
                        </div>
                        <div className="flex-1 flex vertical">
                            <label>
                                <small>
                                    Ordenar Por
                                </small>
                            </label>
                            <select defaultValue="">
                            <option>Aleatório</option>
                                <option value={"oaA-Z"}>Alfabética A-Z</option>
                                <option value={"oaZ-A"}>Alfabética Z-A</option>
                                <option value={"op-menor"}>Preço Menor</option>
                                <option value={"op-maior"}>Preço Maior</option>
                        
                            </select>

                        </div>
                        <div className="flex-1"></div>
                    </div>
                 
                    <br />
                    <Tabela
                        cabecalho={["Produto", "Categoria", "Disponibilidade"]}
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

export default Produtos;