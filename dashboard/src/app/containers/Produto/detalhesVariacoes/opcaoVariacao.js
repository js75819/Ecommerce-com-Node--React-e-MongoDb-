import React, { Component } from 'react'
import { TextoDados } from '../../../components/Texto/Dados'
import  InputValor  from '../../../components/Inputs/InputValor'
import  InputSelect  from '../../../components/Inputs/Select'
import  BlocoImagem  from '../../../components/Imagens/Bloco'
import ButtonSimples from '../../../components/Button/Simples'
import Titulo from '../../../components/Texto/Titulo'


class OpcaoVariacao extends Component {
    state = {
        nome: "P",
        disponibilidade: "disponivel",
        preco: 30,
        promocao: 25,
        quantidade: 200,
        peso: 0.750,
        largura: 3,
        altura: 5,
        comprimento: 17,
        imagens: [
            "https://dummyimage.com/600x400/000/fff",
            "https://dummyimage.com/600x400/000/ffa",
            "https://dummyimage.com/600x400/000/rrr",
            "https://dummyimage.com/600x400/000/fff",
            "https://dummyimage.com/600x400/000/fff",
            "https://dummyimage.com/600x400/000/fff",
        ]


    }

    onRemove = (id) => {
        const { imagens } = this.state;
        this.setState({ imagens: imagens.filter((i, idx) => idx !== id) })
    }
    renderImagens() {
        const { imagens } = this.state;
        return (
            <div className="dados-de-imagens">
                <BlocoImagem
                    imagens={imagens}
                    handleSubmit={() => alert("enviado")}
                    onRemove={this.onRemove} />
            </div>
        )
    }

    renderDadosEnvio() {
        const { peso, largura, comprimento, altura, } = this.state;
        return (
            <div className="Dados-Envio">
                <TextoDados
                    chave="Peso (Kg)"
                    valor={(
                        <InputValor
                            value={peso} noStyle name="peso" type="number"
                            handleSubmit={(valor) => this.setState("peso", Number(valor))} />
                    )} />
                <TextoDados
                    chave="Largura (cm)"
                    valor={(
                        <InputValor
                            value={largura} noStyle name="largura" type="number"
                            handleSubmit={(valor) => this.onChangeInput("largura", Number(valor))} />
                    )} />
                <TextoDados
                    chave="Comprimento (cm)"
                    valor={(
                        <InputValor
                            value={comprimento} noStyle name="comprimento" type="number"
                            handleSubmit={(valor) => this.onChangeInput("comprimento", Number(valor))} />
                    )} />
                <TextoDados
                    chave="Altura (cm)"
                    valor={(
                        <InputValor
                            value={altura} noStyle name="altura" type="number"
                            handleSubmit={(valor) => this.onChangeInput("altura", Number(valor))} />
                    )} />
            </div>
        )
    }

    renderDadosCadastrais() {
        const { nome, disponibilidade, preco, promocao, quantidade } = this.state;
        return (
            <div className="Dados-Produto">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            value={nome} noStyle name="nome"
                            handleSubmit={(valor) => this.onChangeInput("nome", valor)} />
                    )} />
                <div className="Disponibilidade">
                    <TextoDados
                        chave="Nome"
                        valor={(
                            <InputValor
                                value={nome} noStyle name="nome"
                                handleSubmit={(valor) => this.onChangeInput("nome", valor)} />
                        )} />
                    <TextoDados
                        chave="disponibilidade"
                        valor={(
                            <InputSelect
                                name="disponibilidade"
                                onChange={(ev) => this.setState({ disponibilidade: ev.target.value })}
                                value={disponibilidade}
                                opcoes={[
                                    { label: "Disponivel", value: "disponivel" },
                                    { label: "Indisponivel", value: "indisponivel" }
                                ]} />
                        )} />
                    <TextoDados
                        chave="Preço Padrão"
                        valor={(
                            <InputValor
                                value={preco} noStyle name="preco" type="number" 
                                handleSubmit={(valor) => this.onChangeInput("preco", Number(valor))} />
                        )} />
                    <TextoDados
                        chave="Preço Promocional"
                        valor={(
                            <InputValor
                                value={promocao} noStyle name="promocao" type="number"
                                handleSubmit={(valor) => this.onChangeInput("promocao", Number(valor))} />
                        )} />
                    <TextoDados
                        chave="Quantidade"
                        valor={(
                            <InputValor
                                value={quantidade} noStyle name="quantidade" type="number"
                                handleSubmit={(valor) => this.onChangeInput("quantidade", valor)} />
                        )} />
                </div>
            </div>
        )
    }

    renderCabecalho() {
        const { nome } = this.state;
        return (
            <div className="flex horizontal">
                <div className="flex-1">
                    <Titulo tipo="h3" titulo={"Variação - " + nome} />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples
                        type="success" onClick={() => this.updateVariacao()}
                        label="Salvar" />

                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="Opcao-variacao">
                {this.renderCabecalho()}
                <br />
                <div className="flex horizontal">
                    <div className="flex-1">
                        {this.renderDadosCadastrais()}
                    </div>
                    <div className="flex-1">
                        {this.renderDadosEnvio()}
                    </div>
                    <div className="flex-1">
                        {this.renderImagens()}
                    </div>
                </div>
            </div>
        )
    }
}



export default OpcaoVariacao