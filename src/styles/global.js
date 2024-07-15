import { createGlobalStyle } from "styled-components";;

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.colors.bgPages};
        color: ${({ theme }) => theme.colors.txtLogo};

        -webkit-font-smoothing: antialiased;

        font-family: 'Roboto';
    }
    
    a {
        text-decoration: none;
    }

    button, a, Link {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(1.3);
    }
`;