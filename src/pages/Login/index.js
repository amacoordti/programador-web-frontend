import React from 'react'

import {
    Container,
    Main,
    Content,
    Logo,
    Title,
    Small,
    Form,
    Input,
    Button
} from './styles'

const Login = () => {
    return(
        <Container>
            <Main>
                <Content>
                    <Logo>Meu blog</Logo>
                    <Title>Bem vindo de Volta</Title>
                    <Small>Faça login para continuar</Small>
                    <Form>
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Senha" />
                        <Button>Entrar</Button>
                    </Form>
                </Content>
            </Main>
        </Container>
    )
}

export default Login
