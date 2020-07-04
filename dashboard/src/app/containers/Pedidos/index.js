import React, { Component } from 'react';
import moment from 'moment'
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa'
import Tabela from '../../components/Tabela/Simples'
import Paginacao from '../../components/Paginacao/Simples' 


class Pedidos extends Component {
    state = {
        pesquisa: "",
        atual:0
    }
    onChangePesquisa = (ev) => this.setState({ pesquisa: ev.target.value })
    changeNumeroAtual = (atual) => this.setState({atual})
    //dados

    
    
    render() {
        const pesquisa = this.state;

        const dados = [
            {
                "Cliente": "João Bosco",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situação": "Aguardando Pagamento",
                "botaoDetalhes":"/pedido/022021a12102"
        },
        {
            "Cliente": "Camilla",
            "Valor Total": 39.95,
            "Data": moment().toISOString(),
            "Situação": "Aguardando Pagamento",
            "botaoDetalhes":"/pedido/022021sssa12102"
    },
    {
        "Cliente": "Lucas Felipe",
        "Valor Total": 19.90,
        "Data": moment().toISOString(),
        "Situação": "Pagamento Concluido",
        "botaoDetalhes":"/pedido/022021afgvfr12102"
    },
    {
        "Cliente": "Antonio Fernandes",
        "Valor Total": 19.90,
        "Data": moment().toISOString(),
        "Situação": "Pagamento Concluido",
        "botaoDetalhes":"/pedido/022021afgvfr12102"
    },
    {
        "Cliente": "Emerson Bernardo",
        "Valor Total": 19.90,
        "Data": moment().toISOString(),
        "Situação": "Pagamento Concluido",
        "botaoDetalhes":"/pedido/022021afgvfr12102"
    },
    {
        "Cliente": "Katty Pereira",
        "Valor Total": 19.90,
        "Data": moment().toISOString(),
        "Situação": "Pagamento Concluido",
        "botaoDetalhes":"/pedido/022021afgvfr12102"
    },
        ]
        return (
            <div className="Pedidos full-width">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Pedidos" />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquise Aqui pelo nome do cliente"}
                        onChange={(ev) => this.onChangePesquisa(ev)} 
                        onClick={() => alert("Pesquisar")}
                        />
                    <br />
                    <Tabela
                        cabecalho={["Cliente", "Valor Total", "Data", "Situação"]}
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

export default Pedidos;