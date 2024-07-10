import styled from "styled-components";

// Estilização do header
export const HeaderBox = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeaderContainer = styled.section`
    width: calc(100svw - 3.4rem);
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p{
        font-size: 2rem;
        font-family: "Inter", sans-serif;
        font-weight: bold;
        color: #FFF;
        letter-spacing: 0.3rem;
        -webkit-text-stroke: 0.5px;
        margin-left: -2rem;
    }
    img{
        width: 9.5rem;
    }
    @media (min-width: 1440px) {
        width: 85.5rem;
        height: 8.3rem;
        margin-top: 2.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5.5rem;
        gap: 5.44rem;
        border: 1px solid #9F9F9F;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: baseline;
    button{
        border: none;
        background: none;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }
   
    hr{
        background-color: #fff;
        border: none;
        height: 0.3rem;
        width: 4rem;
    }

    div{
        width: 15.6rem;
        height: 21.5rem;
        background-color: #212121;
        position: right bottom;
    }

    @media (min-width: 1440px) {
        display: none;

        hr{
            display: none;
        }
    }
`
export const ButtonPagesDesktop = styled.div`
    display: none;

    a{
        display: none;
    }

    @media (min-width: 1440px) {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 3.2rem;
        
        a{
            display: block;
            text-transform: uppercase;
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
            font-family: "Roboto", sans-serif;
            font-style: normal;
            letter-spacing: 0.22rem;
        }

        a:hover{
            border-bottom: 1px solid #9F9F9F;
        }
    }
    
`

/// Estilização Pagina principal

export const LetreiroInicial = styled.section`
    width: 100%;

    h1 {
        font-size: 4rem;
        color: #BDBDBD;
        margin-left: 4.3rem;
        margin-top: 3rem;
        font-family: "Roboto", sans-serif;
        font-weight: light;
    }
    h2 {
        font-size: 4rem;
        color: #333333;
        margin-left: 4.3rem;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

    @media (min-width: 1440px) {
    h1 {
        font-size: 4rem;
        color: #BDBDBD;
        margin-left: 4.3rem;
        margin-top: 5rem;
        font-family: "Roboto", sans-serif;
        font-weight: light;
    }
    h2 {
        font-size: 4rem;
        color: #333333;
        margin-left: 4.3rem;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }
    }
`
export const ImagemContainer = styled.section`
    margin-top: 6rem;

    #ImagensMobile{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 2.7rem;
        margin-bottom: 3.5rem;

        img{
            width: 83%;
            height: 25.5rem;
            border-radius: 1rem;
        }
    }


`

export const Utilizacao = styled.section`

    #paragrafos {
        color: #FFFF;
        font-size: 0.94rem;
        width: 100%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Arimo", sans-serif;
    }


    .principal {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin: 1rem;
        text-align: justify;
        align-items: center;
        width: 80%;
    }

    @media (min-width: 1440px) {

        width: 80%;

        #paragrafos {
        background-color: #20483D;
        color: #FFFF;
        font-size: 1.63rem;
        width: 100%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Arimo", sans-serif;
    }

    .principal {
        margin-top: 1rem;
        margin-bottom: 1rem;
        margin: 1rem;
        text-align: justify;
        align-items: center;
        width: 80%;
    }

    #ImagensMobile{
        flex-direction: row;
        width: 81%;
        gap: 3rem;
        margin-bottom: 3rem;

        img{
            width: 50%;
            height: 25.5rem;
        }
    }
`