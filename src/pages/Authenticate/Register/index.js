import React, { Component } from 'react'

import {
    Form
} from './styles'

import Input from '../../../components/Input'
import Button from '../../../components/Button'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            email: '',
            password: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        switch(e.target.name) {
            case 'user':
                this.setState({ user: e.target.value })
                break
            case 'email':
                this.setState({ email: e.target.value })
                break
            case 'password':
                this.setState({ password: e.target.value })
                break
            default:
                break
        }
    }
    handleSubmit(e) {
        e.preventDefault()

        console.log('Clicou')
    }

    render() {
        return(
            <Form onSubmit={ this.handleSubmit }>
                <Input type="text" name="user" placeholder="Usuário" value={ this.state.user } onChange={ this.handleInput } />
                <Input type="email" name="email" placeholder="Email" value={ this.state.email } onChange={ this.handleInput } />
                <Input type="password" name="password" placeholder="Senha" value={ this.state.password } onChange={ this.handleInput } />
                <Button>Entrar</Button>
            </Form>
        )
    }
}

export default Register
