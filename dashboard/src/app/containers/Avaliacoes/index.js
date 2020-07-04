import React, { Component } from 'react';
import moment from 'moment'
import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples'
import Voltar from '../../components/Links/Voltar';


class Avaliacoes extends Component {



    render() {

        const dados = [
            {
                "Cliente": "João Bosco",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/js75819@gmail.com"

            },
            {
                "Cliente": "João BoscSSSSo",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/js75SDD819@gmail.com"

            },
            {
                "Cliente": "João BosSSSSSSSSco",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/jsSDSD75819@gmail.com"

            },
            {
                "Cliente": "João BFDDFDosco",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/js7SDSD5819@gmail.com"

            },
            {
                "Cliente": "vADIA",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/js75819@gmail.com"

            },
            {
                "Cliente": "João SSSBosco",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDetalhes":"/avaliacao/js75SSS19@gmail.com"

            },
           
            

        ]
        return (
            <div className="Avaliacoes full-width">
                <div className="Card">
                <Voltar path="/produto/knjfkjd" />

                    <Titulo tipo="h1" titulo="Avaliacoes - PRODUTO1" />
                    <br />
                    
                    <br />
                    <Tabela
                        cabecalho={["Cliente", "Data"]}
                        dados={dados} />
                    
                </div>

            </div>
        );
    }
}

export default Avaliacoes;