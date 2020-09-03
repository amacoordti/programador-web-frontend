import styled from 'styled-components'

import Background from '../../assets/images/Large-Triangles.svg'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-template-areas: "main aside";
    background-image: url(${Background});

    @media screen and (max-width: 1000px) {
        grid-template-columns: 12fr;
        grid-template-areas: "main";
    }
`
export const Main = styled.main`
    grid-area: main;
    background: #fafafa;
    display: grid;
    grid-template-areas: ". content .";
    @media screen and (max-width: 499px) {
        grid-template-columns: 1fr 10fr 1fr;
    }
`
export const Content = styled.div`
    grid-area: content;
    display: grid;
    align-self: center;
`
export const Logo = styled.h2`
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 1px;
`
export const Title = styled.h2`
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    margin-top: 50px;
    font-size: 25px;
`
export const Small = styled.small`
    margin: auto;
    font-size: 15px;
    color: grey;
`
export const Form = styled.form`
    margin-top: 25px;
`
export const Input = styled.input`
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 10px 15px;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
`
export const Button = styled.button`
    width: 100%;
    padding: 10px 15px;
    margin-top: 10px;
    border: 1px solid #71acff;
    border-radius: 8px;
    background: #5a95e8;
    color: white;
    cursor: pointer;
`
