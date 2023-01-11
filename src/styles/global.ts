import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Nunito", sans-serif;
        background: ${props => props.theme.Background};
        color: ${props => props.theme.title};
    }

`