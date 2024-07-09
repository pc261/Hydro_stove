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
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #0C0C0D;
        background-image: url("/Background_img.svg");
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
