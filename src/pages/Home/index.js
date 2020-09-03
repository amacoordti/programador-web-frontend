import React from 'react'

import {
    Container,
    Header,
    Brand,
    Nav,
    List,
    Item,
    Main,
    Post,
    Profile,
    Title,
    Photo,
    Name,
    DatePost,
    Content
} from './styles'

import ProfilePhoto from '../../assets/profile/pp.jpg'

const Home = () => {
    return(
        <Container>
            <Header>
                <Brand>Meu Blog</Brand>
                <Nav>
                    <List>
                        <Item>Perfil</Item>
                        <Item>Sair</Item>
                    </List>
                </Nav>
            </Header>
            <Main>
                <Post>
                    <Profile>
                        <Photo src={ ProfilePhoto } alt="Profile photo" />
                        <Name>Pedro Henrique</Name>
                    </Profile>
                    <Title>
                        Criar templates não é uma tarefa fácil!
                    </Title>
                    <DatePost>Hoje às 11:46</DatePost>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Content>
                </Post>
                <Post>
                    <Profile>
                        <Photo src={ ProfilePhoto } alt="Profile photo" />
                        <Name>Pedro Henrique</Name>
                    </Profile>
                    <Title>
                        Desafios de um programador Full Stack:
                    </Title>
                    <DatePost>Hoje às 11:57</DatePost>
                    <Content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Content>
                </Post>
            </Main>
        </Container>
    )
}

export default Home
