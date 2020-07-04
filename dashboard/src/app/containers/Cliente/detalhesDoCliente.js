import React from 'react';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import Voltar from  '../../components/Links/Voltar'


class DetalhesDoCliente extends React.Component {
state= {
    nome:"João Bosco",
    CPF: "072.939.226-23",
    telefone: "11-941188262",
    dataDeNascimento:"29/01/2020",
    email: "js75819@gmail.com",

    endereco: "Rua Teste , 056",
    numero:"18",
    bairro: "Centro",
    cidade:"Bauru",
    estado:"SP",
    cep:"06807170",

}
handleSubmit = (field, value) => {
    this.setState({ [field]: value });
}


    renderCabecalho(){
        const {nome} = this.state
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo={nome}/>
                </div>
                        <div className="flex-1 flex flex-end">
                        <ButtonSimples 
                            onClick={() => alert("salvo!")}
                            label="Salvar"
                            type="success" />
                        <ButtonSimples 
                            onClick={() => alert("removido!")}
                            label="Remover"
                            type="danger" />
                    </div>               
            </div>
        )
    }

    renderDetalhesCadastro(){

        const { nome, CPF, email, telefone, dataDeNascimento} = this.state;
        return (
            <div className="Detalhes-do-Cadastro">
                <TextoDados 
                    chave="Nome"
                    valor={(
                        <InputValor 
                            name="nome" noStyle
                            handleSubmit={(valor) => this.handleSubmit("nome", valor)}
                            value={nome} />
                    )}
                    />
                <TextoDados 
                    chave="CPF"
                    valor={(
                        <InputValor 
                            name="cpf" noStyle
                            handleSubmit={(valor) => this.handleSubmit("CPF", valor)}
                            value={CPF} />
                    )}
                    />
                <TextoDados 
                    chave="Telefone"
                    valor={(
                        <InputValor 
                            name="telefone" noStyle
                            handleSubmit={(valor) => this.handleSubmit("telefone", valor)}
                            value={telefone} />
                    )}
                    />
                <TextoDados 
                    chave="E-mail"
                    valor={(
                        <InputValor 
                            name="email" noStyle
                            handleSubmit={(valor) => this.handleSubmit("email", valor)}
                            value={email} />
                    )}
                    />
                <TextoDados 
                    chave="Data de Nascimento"
                    valor={(
                        <InputValor 
                            name="datadenascimento" noStyle
                            handleSubmit={(valor) => this.handleSubmit("dataDeNascimento", valor)}
                            value={dataDeNascimento} />
                    )}
                    />
            </div>
        );
    }
    renderDetalhesEntrega(){
        const { endereco, numero, bairro, cidade, estado, cep, } = this.state;
        return (
            <div className="Detalhes-da-Entrega">
                <TextoDados 
                    chave="Endereço"
                    valor={(
                        <InputValor 
                            name="endereco" noStyle 
                            handleSubmit={(valor) => this.handleSubmit("endereco", valor)}
                            value={endereco} />
                    )}
                    />
                <TextoDados 
                    chave="Numero"
                    valor={(
                        <InputValor 
                            name="numero" noStyle 
                            handleSubmit={(valor) => this.handleSubmit("numero", valor)}
                            value={numero} />
                    )}
                    />
                <TextoDados 
                    chave="Bairro"
                    valor={(
                        <InputValor 
                            name="cpf" noStyle 
                            handleSubmit={(valor) => this.handleSubmit("bairro", valor)}
                            value={bairro} />
                    )}
                    />
                <TextoDados 
                    chave="Cidade"
                    valor={(
                        <InputValor 
                            name="cidade" noStyle 
                            handleSubmit={(valor) => this.handleSubmit("cidade", valor)}
                            value={cidade} />
                    )}
                    />
                <TextoDados 
                    chave="Estado"
                    valor={(
                        <InputValor 
                            name="estado" noStyle 
                            handleSubmit={(valor) => this.handleSubmit("estado", valor)}
                            value={estado} />
                    )}
                    />
                <TextoDados 
                    chave="CEP"
                    valor={(
                        <InputValor 
                            name="cep" noStyle 
                            handleSubmit={(valor) => this.handleSubmit("cep", valor)}
                            value={cep} />
                    )}
                    />
            </div>
        );
    }

    render(){
        return (
            <div className="DetalhesDoCliente">
               <Voltar path="/clientes"/>
                { this.renderCabecalho() }
                <div className="flex horizontal">
                    <div className="flex-1 flex vertical">
                        { this.renderDetalhesCadastro() }
                    </div>
                    <div className="flex-1 flex vertical">
                        { this.renderDetalhesEntrega() }
                    </div>
                </div>
            </div>
        )
    }
}


export default DetalhesDoCliente;