import React, { Component } from 'react';

import Titulo from '../../components/Texto/Titulo'
import { Link } from 'react-router-dom';

import Input from '../../components/Inputs/Simples'
import Checkbox from '../../components/Inputs/Checkbox'
import Button from '../../components/Button/Simples'

class Login extends Component {

    state = {
        email: "",
        senha:"",
        opcaoLembrar:true
    }
    onChangeInput = (field, ev) => this.setState({[field]: ev.target.value })
    onChangebox = (field) => this.setState({[field]: !this.state[field]})
    render() {
        const {email, senha, opcaoLembrar} = this.state
        return (
            <div className="Login flex flex-center">
                <div className="Card">
                    <Titulo tipo="h1" titulo="Senhorita Lee" />
                    <p>Faça o Seu Login Abaixo</p>
                    <Input 
                    label="E-mail"
                    value={email}
                    type="email"
                    onChange={(ev) =>this.onChangeInput("email", ev)}  />
                    <Input 
                    label="Senha"
                    value={senha}
                    type="password"
                    onChange={(ev) =>this.onChangeInput("senha", ev)}  />
                    <div>
                        <div>
                        <Checkbox value={opcaoLembrar}
                         onChange={() =>this.onChangebox("opcaoLembrar") }
                         label="Lembrar?" />
                        
                        </div>
                        <div>
                            <Link to ="/recuperar-senha">Esqueceu a Senha?</Link>
                        </div>
                    </div>
                    <Button type="sucess" rota="/" label="Entrar"/>
                </div>

            </div>
        )
    }
}

export default Login;