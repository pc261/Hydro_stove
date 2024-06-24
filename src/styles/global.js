import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        height: 100svh;
        display: flex;
        justify-content: center;
        background: black;
        background-image: url("../public/Background_img.svg");
        background-repeat: no-repeat;
        background-position: right top;
        background-size: 40.5rem;

        @media (min-width: 1024px) {
            background-size: 150rem;
        }
    }
`
export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100svw;

    margin-top: 4.4rem;

    @media (min-width: 1024px){
        margin-top: 7.9rem;
    }
`
