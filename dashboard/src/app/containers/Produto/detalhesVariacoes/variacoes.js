import React, {Component} from 'react'
import Titulo from '../../../components/Texto/Titulo'

class Variacoes extends Component {
    state = {
        variacoes: [
            {nome: "P", id: "215452315"},
            {nome: "M", id: "215452315"},
            {nome: "G", id: "215452315"}


        ]
    }

    render() {
        const {variacoes} = this.state
        return(
            <div className="Variacoes flex vertical flex-center">
                <Titulo tipo="h2" titulo="Variações"/>
                {
                    variacoes.map((item,idx) =>(
                        <div className="variacao-item">
                            <span>{item.nome}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Variacoes