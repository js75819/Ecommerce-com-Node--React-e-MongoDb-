import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';

import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

import Pesquisa from '../../components/Inputs/Pesquisa';

class ListaDeProdutos extends Component {
    state= {
        pesquisa: "",
        atual:0
    }

    render() {

        const { pesquisa } = this.state;

        const dados = [
            {
                "Produto": "Bocetinha ",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDetalhes": "/produto/kjfkb"

            },
            {
                "Produto": "Bocetinha ",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDetalhes": "produtos/kjfkb"

            },
            {
                "Produto": "Bocetinha ",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDetalhes": "produtos/kjfkb"

            },
            {
                "Produto": "Bocetinha ",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDetalhes": "produtos/kjfkb"

            }
        ]

        return (
            <div className="ListaDeProdutos">
                <br /><hr />
                <Titulo tipo="h3" titulo="Produtos da Categoria" />
                <br />
                <Pesquisa
                valor={pesquisa}
            placeholder={"Pesquise aqui aquele item godsdsdsra mesdsdter nela"}
            onChange={(ev) => this.onChangePesquisa(ev)}
            onClick={() => alert("pesquisou")}
                />
                <Tabela
                    cabecalho={["Produto", "Estoque", "Disponibilidade"]}
                    dados={dados} />
                <Paginacao
                    atual={this.state.atual}
                    total={120}
                    limite={20}/>
            </div>
        )
    }
}


export default ListaDeProdutos