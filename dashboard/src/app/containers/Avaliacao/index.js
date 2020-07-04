import React, { Component } from 'react';
import Voltar from '../../components/Links/Voltar';
import Titulo from '../../components/Texto/Titulo';
import ButtonSimples from '../../components/Button/Simples';


class Avaliacao extends Component {

    renderCabecalho(){
        return(
            <div className="flex">
                <div className="flex-1 flex vertical">
                    <Titulo tipo="h3" titulo="Avaliação - Porduto bica" />
                    <Titulo tipo="h4" titulo="Cliente - p]ç" />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples 
                        type="danger"
                        onClick={() => alert("deletado")}
                        label="Remover" />
                </div>
            </div>
            


        )
    }

    renderMensagem(){
        return (
            <div className="Mensagem">
                ,mvkjmv;.,m,lvjflvm,.xmvkfjmbl,.;bmvkjbl,b.v, lbmgkblv,b.,clbmokbv.b,mgjml,b.,vlbmfb.v,b.mbkdlb,.,bldfkogkç,bç~mbokflb,.,bldkggdçb.,ç~b,mdok
            </div>
        )
    }
    render(){
        return (
            <div className="Avaliacao full-width">
                <div className="Card">
                    <Voltar path="/avaliacoes/knjfkjd" />
                    { this.renderCabecalho() }
                    { this.renderMensagem() }
                </div>
            </div>
        )
    }


}
export default Avaliacao;