import styled from 'styled-components'

const Button = styled.button`
    width: 100%;
    padding: 10px 15px;
    margin-top: 10px;
    border: 1px solid #71acff;
    border-radius: 8px;
    background: #5a95e8;
    color: white;
    cursor: pointer;
    opacity: .7;
    transition-duration: .4s;

    &:hover {
        opacity: 1;
    }
`

export default Button
