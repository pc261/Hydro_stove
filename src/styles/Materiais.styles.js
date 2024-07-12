import styled from "styled-components";

export const Letreiro = styled.section`
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

export const Pecas = styled.section `
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    margin-bottom: 4rem;


    img {
        width: 80%;
        margin-bottom: -.5rem;
    }
    .nome {
        width: 80%;
        background-color: #20483D;
    }
    h3{
        color: #BDBDBD;
        font-size: 3.6rem;
        margin-bottom: 1.5rem;
        margin-inline: .5rem;
    }
    .preco {
        color: #BDBDBD;
        font-size: 2rem;
    }
    .formatacao {
        display: flex;
        gap: 2.5rem;
        width: 95%;        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .descricao{
         width: 80%;
         color: #FFFFFF;
         font-size: 1.5rem;
         font-family: "Arimo", sans-serif;
         text-align: justify;
         margin-inline: 3rem;
    }
    .botao{
        background-color: #DADADA;
        font-size: 1.2rem;
        text-transform: uppercase;
        letter-spacing: .15rem;
        border: none;
        width: 22.2rem;
        height: 7.1rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        margin-inline: 3rem;
    }

    a{
        text-decoration: none;
        color: #333333;        
        font-family: "Roboto", sans-serif;
    }

    .precodesktop{
        display: none;
    }

    .desktop {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 1440px) {
            width: 100%;
            margin-bottom: 4rem;

        .nome {
            width: 80%;
            background-color: #20483D;
            width: 117.0rem;
            height: 43.5rem;
        }


        .desktop{
            display: flex;
            width: 80%;
        }
        .formatacao {
            display: flex;
            gap: 15rem;
            width: 95%;
            margin-top: 2rem;
            align-items: center;
            justify-content: center;
            margin-inline: 3rem;
        }
        h3{
            color: #BDBDBD;
            font-size: 4rem;
            margin-bottom: 1.5rem;
            margin-inline: .5rem;
        }
        .preco {
            display: none;
        }
        .descricao{
            width: 80%;
            color: #FFFFFF;
            font-size: 1.5rem;
            font-family: "Arimo", sans-serif;
            justify-content: center;
            align-items: center;
            text-align: justify;
            margin-inline: 3rem;
            
         }
        .precodesktop{
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: left;
            font-size: 2.6rem;
            color: #FFFFFF;
            margin-inline: 3rem;
            margin-top: 2rem;
        }
        .botao{
            background-color: #DADADA;
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: .15rem;
            border: none;
            width: 22.2rem;
            height: 7.1rem;
            margin-top: 3rem;
            margin-bottom: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80%;
            margin-inline: 3rem;
        }
    }
`

export const BarraDeRolagem= styled.section `

    .rolagem{
        width: 70%;
        display: flex;
        gap: 2rem;
        margin-bottom: 3rem;
    }


    h1{
        color: #707070;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h2{
        color: #E0E0E0;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h3{
        color: #BDBDBD;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`