import React, { Component } from 'react';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';
import { TextoDados } from '../../components/Texto/Dados';
import InputValor from '../../components/Inputs/InputValor';
import InputSelect from '../../components/Inputs/Select';
import Voltar from  '../../components/Links/Voltar'


class DetalhesCategoria extends Component {
    state = {
        nome:"Categoria",
        disponibilidade:"disponível",
        codigo:"15s1dfs2d"

    }

    renderCabecalho(){
        const { nome } = this.state;
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo={nome} />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples 
                            onClick={() => alert("Salvo!")}
                            type="success"
                            label="Salvar" />
                    <ButtonSimples
                        onClick={()=> alert("Removido")}
                        type="danger"
                        label="Remover" />
                </div>
            </div>
        )
    }

    
    renderDados(){
        const { codigo,nome, disponibilidade,} = this.state;
        return (
            <div className="flex vertical">
                <TextoDados
                    chave="Código"
                    valor={(
                        <InputValor
                            name="codigo" noStyle
                            value={codigo}
                            handleSubmit={(valor) => this.state( codigo, valor )} />
                    )} />
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            name="nome" noStyle
                            value={nome} 
                            handleSubmit={(valor) => this.state( nome, valor )} />
                    )} />
                <br />
                <TextoDados 
                    chave="Disponiblidade"
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
            </div>
        )
    }

    render(){
        return (
            <div className="Detalhes-Categoria">
<Voltar path="/categorias"/>
                { this.renderCabecalho() }
                { this.renderDados() }
            </div>
        )
    }
}



export default DetalhesCategoria;