import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    html, body, #root {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        outline: none;
    }
`
