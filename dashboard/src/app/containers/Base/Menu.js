import React, {Component} from 'react'
//import {Link} from 'react-router-dom'

import ListItems from './ListItens'

class Menu extends Component {
    state = {open:true}
    toggleOpen= () => this.setState({open: !this.state.open})
    render() {
        const {open} = this.state;
        return(
            <div className={`Menu full-height ${open? "menu-open":""}`}>
                <div className={`item-top flex ${open ? "flex-end":"flex-center"}`} onClick={() =>this.toggleOpen()}>
                    {(<i className={`fas fa-arrow-${open ?"left":"right"}`}/>)}
                </div>
                <hr/>
                <ListItems open={open} history={this.props.history} />
            </div>
        );
    }
}

export default Menu;