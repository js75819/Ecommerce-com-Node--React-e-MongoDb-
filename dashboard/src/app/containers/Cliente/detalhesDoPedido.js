import React, { Component } from 'react';
import moment from 'moment';

import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';


class DetalhesDosPedidos extends Component {


    render() {

        const dados = [
            {
                "ID": "022021a12102",
                "Valor Total": 89.19,
                "Data": moment().toISOString(),
                "Situação": "aguardando pagamento",
                "botaoDetalhes": "/pedido/022021a12102"
            },
            {
                "ID": "022021sssa12102",
                "Valor Total": 89.19,
                "Data": moment().toISOString(),
                "Situação": "aguardando pagamento",
                "botaoDetalhes": "/pedido/022021sssa12102"
            },
            {
                "ID": "022021afgvfr12102",
                "Valor Total": 89.19,
                "Data": moment().toISOString(),
                "Situação": "aguardando pagamento",
                "botaoDetalhes": "/pedido/022021afgvfr12102"
            }
        ]
      

        return (
            <div className="Detalhes-dos-Pedidos">
                <Titulo tipo="h3" titulo="Pedidos Feitos" />
                <br />
                <Tabela
                    cabecalho={["ID", "Valor Total", "Data", "Situação"]}
                    dados={dados} />
                
            </div>
        )
    }
}


export default DetalhesDosPedidos;