import styled from "styled-components";

export const LetreiroCentral = styled.section`
    h1{
        color: #BDBDBD;
        font-size: 5rem;
        font-family: "Arimo", sans-serif;
        margin-top: 4.2rem;
        margin-bottom: 5.8rem;
    }
`
export const Integrante = styled.section`
    width: 80%;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 1rem;
        margin-bottom: 3rem;
    }

    p {
        color: #FFFFFF;
        font-family: "Arimo", sans-serif;
        font-size: 1.5;
    }

    .esquerda {
        text-align: left;
    }
    .direita {
        text-align: right;
    }

    @media (min-width: 1440px) {
        width: 85%;

        img{
            width: 17.90rem;
            height: 18rem;
            z-index: 1;
            border-radius: 30%;
        }

        p{
            background-color: #20483D;
            border-radius: 1rem;

            margin-top: 6.1rem;
            margin-bottom: 6.1rem;

            padding-inline: 6rem;
            padding-block: 6rem;

            font-size: 2.6rem;
        }

        .esquerda {
            img{
                margin-right: -5rem;
            }
        }
        .direita {
            img{
                margin-left: -5rem;
            }
        }
    }
`