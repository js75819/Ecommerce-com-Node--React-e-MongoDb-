import React, {Component} from 'react';

import Titulo from '../../components/Texto/Titulo';

class Pedidos extends Component{
    render() {
        return(
            <div className="pedidos">
                <Titulo tipo="h1" titulo="Pedidos"/>

            </div>
        );
    }
}

export default Pedidos;