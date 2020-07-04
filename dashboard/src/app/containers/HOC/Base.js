import React from 'react';
import Base from '../Base';
//import { ReactComponent } from '*.svg';

const base = Component => {
    return class extends Component{
        render(){
            return(
                <Base history={this.props.history}>
                    <Component {...this.props}/> 
                </Base>
            )
        }
    }
}


export default base;

