import React, { Component } from 'react';

import DetalhesDoCliente from './detalhesDoCliente';
import DetalhesDosPedidos from './detalhesDoPedido';


class Cliente extends Component {

    render(){
        return (
            <div className="Cliente full-width flex vertical">
                <div className="Card">
                    <DetalhesDoCliente/>
                </div>
                <div className="Sub-Card">
                    <DetalhesDosPedidos/>
                </div>
            </div>
        )
    }
}


export default Cliente;