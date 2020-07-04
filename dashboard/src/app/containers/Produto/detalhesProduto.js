import React,{ Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import Button from '../../components/Button/Simples'
import {TextoDados} from '../../components/Texto/Dados'
import InputValor from '../../components/Inputs/InputValor'
import { Link } from 'react-router-dom';
import InputSelect from '../../components/Inputs/Select'
import BlocoImagem from '../../components/Imagens/Bloco.js'
import Voltar from  '../../components/Links/Voltar'

class DetalhesProduto extends Component {
    state= {
        nome:"Boceta",
        disponibilidade:"disponivel",
        descricao:"",
        imagens: [
            "https://dummyimage.com/600x400/000/fff",
            "https://dummyimage.com/600x400/000/ffa",
            "https://dummyimage.com/600x400/000/rrr",
            "https://dummyimage.com/600x400/000/fff",
            "https://dummyimage.com/600x400/000/fff",
            "https://dummyimage.com/600x400/000/fff",
        ]
    }
   
    renderCabecalho(){
        const {nome} = this.state;
        return (
            <div className="flex">
                <div className="flex-1 flex vertical">
                    <Titulo tipo="h1" titulo={nome} />
                    <Link to="/avaliacoes/kfnfgfg"><small>Ver Avaliações</small></Link>
                </div>
                <div className="flex-1 flex flex-end">
                    <Button 
                        type="success"
                        label="Salvar"
                        onClick={() => alert("Salvo")} />
                </div>
            </div>
        )
    }


    renderDados(){
        const { nome, disponibilidade, descricao } = this.state;
        return (
            <div className="Dados-Produto">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            value={nome} noStyle name="nome" 
                            onChange={(valor) => this.setState({nome:valor})} />
                    )} />
                    <TextoDados
                    chave="Disponibilidade"
                    valor={(
                        <InputSelect
                        name="disponibilidade"
                        onChange={(ev) => this.setState({ disponibilidade: ev.target.value })}
                        value={disponibilidade}
                        opcoes={[
                            { label: "Disponível", value: "disponivel" },
                            { label: "Indisponível", value: "indisponivel" }
                        ]} />
                    )} />
                <br />
               
                <TextoDados
                    chave="Descricao"
                    valor={(
                        <textarea
                            name={'descricao'}
                            onChange={(ev) => this.setState({descricao: ev.target.value })}
                            value={descricao}
                            rows="10"
                            style={{ resize: "none" }} />
                    )} />
                       
                    
            </div>
        )
    }

    onRemove = (id) => {
        const {imagens} = this.state;
        this.setState({imagens:imagens.filter((i, idx)=> idx !== id) })
    }

    renderImagens(){
        const { imagens } = this.state;
        return (
            <div className="dados-de-imagens">
                <BlocoImagem
                    imagens={imagens}
                    handleSubmit={() => alert("enviado!")}
                                onRemove={this.onRemove} />

            </div>
        )
    }


    render(){
        return (
            <div className="Detalhes-do-Produto">
                <Voltar path="/produtos"/>
                { this.renderCabecalho() }
                <br />
                <div className="flex horizontal">
                    <div className="flex-1 flex vertical">
                        { this.renderDados() }
                    </div>
                     <div className="flex-1 flex vertical">
                        { this.renderImagens() }
                    </div> 
                </div>
            </div>
        )
    }
}



export default DetalhesProduto;