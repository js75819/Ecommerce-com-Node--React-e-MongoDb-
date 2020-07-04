import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import {TextoDados} from  '../../components/Texto/Dados'
import ButtonSimples from '../../components/Button/Simples'
import TabelaSimples from '../../components/Tabela/Simples'

class DetalhesDoPedido extends Component {

    renderCabecalho(){
        return (
        <div className="flex">
                <div className="flex-1 flex">
        <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 04-04-2019"/>
        

        </div>
        <div className="flex-1 flex flex-end">

        <ButtonSimples 
     type="danger"
     label="CANCELAR PEDIDO"
     onClick={() =>alert("Cancelado")}
     />
        </div>
     
    </div>
    )
    }

    renderDadosdoCliente(){
        return(
            <div className="flex-2">
                <Titulo tipo="h4" titulo="Dados do Cliente" />
                    <br/>
                <TextoDados chave="Nome" valor="Cliente01"/>
                <TextoDados chave="CPF" valor="072.929.225-23"/>
                <TextoDados chave="Telefone" valor="11 991821204"/>
                <TextoDados chave="Data de Nascimento" valor="29/10/1996"/>

                </div>
        )
    }

    renderDadosdeEntrega(){
        return(
            <div className="flex-2">
            <Titulo tipo="h4" titulo="Dados de Entrega" />
                <br/>
            <TextoDados chave="Endereço" valor="Rua Jacupiranga"/>
            <TextoDados chave="Bairro" valor="Vista Alegre"/>
            <TextoDados chave="Cidade" valor="Embu das Artes"/>
            <TextoDados chave="Estado" valor="Bahia"/>
            <TextoDados chave="CEP" valor="06807-170"/>

            </div>
        )
    }

    renderDadosdePagamento(){
        return(
            <div className="flex-3">

            <Titulo tipo="h4" titulo="Dados de Pagamento" />
                <br/>
            <TextoDados chave="Taxa de Entrega" valor="R$ 11,50 (PAC)"/>
            <TextoDados chave="Valor do Pedido" valor="R$ 32,00"/>
            <TextoDados chave="Valor Total" valor="R$ 43,50"/>
            <TextoDados chave="Forma de Pagamento" valor="BOLETO"/>
            

            </div>
        )
    }

    renderDadosDoCarrinho(){
        const dados = [
            {
                "Produto":"Produto 1",
                "Preço Und.":"R$ 10,00",
                "Quantidade": "1",
                "Preço Total":"RS 10,00"
                

            },
            {
                "Produto":"Produto 2",
                "Preço Und.":"R$ 10,00",
                "Quantidade": "3",
                "Preço Total":"RS 30,00"
                

            }
        ]
        return(
            <div className="flex-3">

            <Titulo tipo="h4" titulo="Carrinho" />
                <br />
           <TabelaSimples 
           cabecalho={["Produto","Preco Und.","Quantidade", "Preço Total" ]}
            dados={dados} />
            </div>
        )
    }
    
    render(){
        
        
         return (
            <div className="Detalhes-do-Pedido">
                { this.renderCabecalho() }
                <div className="flex vertical">
                    <div className="flex horizontal">
                        { this.renderDadosdoCliente() }
                        { this.renderDadosDoCarrinho() }
                    </div>
                    <div className="flex horizontal">
                        { this.renderDadosdeEntrega() }
                        { this.renderDadosdePagamento() }
                    </div>
                </div>
            </div>
        )
    }
}




export default DetalhesDoPedido;