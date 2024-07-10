import styled from "styled-components";

/// Estilização Pagina principal

export const LetreiroInicial = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4.2rem;
    margin-bottom: 5.8rem;

    h1 {
        font-size: 6.4rem;
        color: #BDBDBD;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
    }

    h2 {
        font-size: 6.4rem;
        color: #333333;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

    @media (min-width: 1440px) {
        width: 81%;
        display: block;

        margin-top: 24.3rem;
        margin-bottom: 16.9rem;
    }
`
export const ImagemContainer = styled.section`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img{
        width: 85%;
        height: 26.6rem;
        border-radius: 1rem;
    }

    @media (min-width: 1440px){

        img{
            width: 85%;
            height: 43.7rem;
        }
    }
`

export const Utilizacao = styled.section`  
    width: 84%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: justify;
    font-family: "Arimo", sans-serif;
    
    font-size: 1.5rem;
    color: #FFFF;
    gap: 2.5rem;
    margin-top: 5.5rem;
    margin-bottom: 5.5rem;

    .primeiro {
    justify-content: center;
    display: flex;
    }

    .ultimo {
    justify-content: center;
    display: flex;
    }


    @media (min-width: 1440px) {
        width: 85%;
        background-color: #20483D;
        border-radius: 1rem;

        margin-top: 6.1rem;
        margin-bottom: 6.1rem;

        padding-inline: 3.8rem;
        padding-block: 1.4rem;

        font-size: 2.6rem;
    }
`

export const Fotos = styled.section`
    h1 {
        font-size: 6.4rem;
        color: #BDBDBD;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        margin-top: 2rem;
    }

    h2 {
        font-size: 6.4rem;
        color: #333333;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .imagem-mobile{
        width: 11.12rem;
        height: 10.31rem;
        margin: 1rem 2rem 2rem 2rem;
    }

    p{
        color: #BDBDBD;
        font-size: 1.38rem;
        font-family: "Arimo", sans-serif;
    }

    @media (min-width: 1440px) {
        width: 81%;
        display: block;

        .imagem-mobile{
        width: 31.44rem;
        height: 27.31rem;
        margin: 1rem 2rem 2rem 2rem;
        }

        p{
            font-size: 4rem;
            background-color: #20483D;
            margin: 1rem;

            padding-inline: 3.8rem;
            padding-block: 1.4rem;
        }
    }
`

export const Integracao = styled.section`
    width: 80%;

    h1 {
        font-size: 5.4rem;
        color: #BDBDBD;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        margin-top: 2rem;
    }

    h2 {
        font-size: 5.4rem;
        color: #333333;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    p {
        font-size: 1.5rem;
        color: #FFFFFF;
        font-family: "Arimo", sans-serif;
        margin-bottom: 2rem;
    }

    @media (min-width: 1440px) {
        width: 81%;
        display: block;

        .imagem-mobile{
        width: 31.44rem;
        height: 27.31rem;
        margin: 1rem 2rem 2rem 2rem;
        }

        p{
            font-size: 2.6rem;
            background-color: #20483D;
            margin: 1rem;
            border-radius: 1rem;
            padding-inline: 3.8rem;
            padding-block: 1.4rem;
        }
    }
`