import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }

    ul, ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    input, textarea{
        border: 0;
        background: transparent;
    }

`