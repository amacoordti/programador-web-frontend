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

const Authenticate = () => {
    return(
        <Container>
            <Main>
                <Content>
                    <Logo>Meu blog</Logo>
                    <Title>Bem vindo de Volta</Title>
                    <Small>Faça login para continuar</Small>
                    <Login />
                </Content>
            </Main>
        </Container>
    )
}

export default Authenticate
