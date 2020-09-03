import React from 'react'

import {
    Container,
    Main,
    Content,
    Logo,
    Title,
    Small
} from './styles'

import Login from './Login'
import Register from './Register'

import { useLocation } from 'react-router-dom'

const Authenticate = () => {
    var Form = Login

    const location = useLocation()

    switch(location.pathname) {
        case '/':
            Form = Login
            break
        case '/login':
            Form = Login
            break
        case '/register':
            Form = Register
            break
        default:
            break
    }

    return(
        <Container>
            <Main>
                <Content>
                    <Logo>Meu blog</Logo>
                    <Title>Bem vindo de Volta</Title>
                    <Small>Faça login para continuar</Small>
                    <Form />
                </Content>
            </Main>
        </Container>
    )
}

export default Authenticate
