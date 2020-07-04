import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo';
import ListaDinamica from '../../components/Listas/ListaDinamicaSimples';
import InputValor from '../../components/Inputs/InputValor.js';


class DetalhesDaEntrega extends Component {
    state = {
        status: [
            "Preparando Para Envio",
            "Entregue a Transportadora",
            "Em Trânsito"
        ],
        codigoDeRastreamento: "21AS15S21BR"
    }

    onAddListaDinamica = (texto) => {
        if(!texto) return false;
        let {status} = this.state
        status.push(texto)
        this.setState({status})
        
    }


    handleSubmit = (value) => {
        this.setState({codigoDeRastreamento: value})

        alert("SALVO")
    }

    render(){
        
        const { status, codigoDeRastreamento } = this.state;
         return (
            <div className="Detalhes-do-Entrega">
                <Titulo tipo="h3" titulo="Entrega" />
                <br />
                <label>Código de Rastreamento</label>
                <InputValor
                    value={codigoDeRastreamento} 
                    handleSubmit = {(value) => this.handleSubmit(value) }
                    name={"codigoDeRastreamento"}
                    />    
                <br />
                <ListaDinamica
                    dados={status}
                    onAdd={this.onAddListaDinamica} />
            </div>
        )
    }
}



export default DetalhesDaEntrega;