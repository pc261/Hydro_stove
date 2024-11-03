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
        width: 85%;
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
        margin-bottom: 2rem;
    }
    iframe{
        width: 85%;
        height: 26.6rem;
        border-radius: 1rem;
        margin-bottom: 2rem; 
    }

    @media (min-width: 1440px){

        flex-direction: row; 
        justify-content: center; 
        align-items: flex-start;

        img{
            width: 40%;
            height: 43.7rem;
            display: flex;
            margin: 2rem;
        }
        iframe{
            width: 40%;
            height: 43.7rem;
            display: flex;
            margin: 2rem;
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

    .TextoCentralizado{
        text-align: center;
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

    width: 84%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8.9rem;

    h1 {
        width: 100%;
        font-size: 4.2rem;
        color: #BDBDBD;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
    }

    h2 {
        width: 100%;
        font-size: 4.2rem;
        color: #333333;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        margin-bottom: 4.4rem;
    }

    div {
        width: 85%;
        display: flex;
        align-items: center;


        gap: 2rem;
        margin-bottom: 7.2rem;

        img{
            width: 18rem;
            border-radius: 8px;
        }
    }


    p{
        color: #BDBDBD;
        font-size: 2.2rem;
        font-family: "Arimo", sans-serif;
    }

    @media (min-width: 1024px) {

        width: 85%;

        h2{
            margin-bottom: 9.1rem;
        }
        
        div{
            justify-content: space-between;
            margin-bottom: 13.2rem;
        }

        div img{
            width: 50rem;
            border-radius: 8px;
        }

        p{
            font-size: 6.4rem;
        }
    }
`

export const Integracao = styled.section`
    width: 84%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 3.3rem;
        color: #BDBDBD;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
    }

    h2 {
        font-size: 3.3rem;
        color: #333333;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        margin-bottom: 8.8rem;
    }

    p {
        width: 100%;
        text-align: justify;
        font-size: 1.5rem;
        color: #FFFFFF;
        font-family: "Arimo", sans-serif;
        margin-bottom: 8.7rem;
        line-height: 2.5rem;
    }

    img {
        height: 26.6rem;
        margin-bottom: 8.7rem;
        border-radius: 1rem;
    }


    .imagem-container {
        display: flex;
        flex-direction: column;
        gap: 2rem; 
    }

    @media (min-width: 1440px) {

        width: 85%;
        display: block;

        h1{
            font-size: 6.4rem;
        }

        h2{
            font-size: 6.4rem;
            margin-bottom: 6rem;
        }
    

        p{
            width: 100%;
            font-size: 2.6rem;
            line-height: 3.4rem;
            background-color: #20483D;
            border-radius: 1rem;
            padding-inline: 3.3rem;
            padding-block: 6.4rem;
            margin-bottom: 3.9rem;
        }

        .imagem-container {
            flex-direction: row; 
            justify-content: space-between; 
        }

        img {
            width: 48%; 
            height: 43.7rem;
            margin-bottom: 0; 
        }
    }
`