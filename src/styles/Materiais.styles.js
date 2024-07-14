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
        width: 81%;
        display: block;

        margin-top: 24.3rem;
        margin-bottom: 16.9rem;
    }
`

export const Pecas = styled.section `
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;

    .Imagens{ 
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        width: 100%;
        height: 15.6rem;
        background-size: cover;
        background-position: center;
    }

    #Imagem1{
        background-image: url("/Arduino.png"); 
    }
    #Imagem2{
        background-image: url("/ModuloWIFI.png"); 
    }
    #Imagem3{
        background-image: url("/bomba.png");
    }

    .Textos{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #20483D;
        padding: 1.5rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;

        div{
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            color: #BDBDBD;
            margin-bottom: 3.2rem;

            h2{
                font-size: 3.2rem;
                font-family: 'Roboto', sans-serif;
                font-weight: normal;
            }

            p{
                font-size: 2rem;
                font-family: 'Roboto', sans-serif;
                font-weight: 300;
                margin-left: 2rem;
                margin-bottom: 0;
            }
        }

        p{
            font-size: 1.5rem;
            font-family: 'Arimo', sans-serif;
            line-height: 2.5rem;
            color: #FFF;
            text-align: justify;
            margin-bottom: 3.4rem;
        }

        a{
            width: 22.2rem;
            height: 7.1rem;
            background-color: #DADADA;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            border-radius: 1rem;

            margin-bottom: .5rem;

            p{
                margin-bottom: 0;
                margin-right: 3.3rem;
                font-family: 'Roboto',sans-serif;
                font-size: 1.2rem;
                letter-spacing: 0.2rem;
                text-transform: uppercase;
                color: #333333;
            }
            
        }
    }

    @media(min-width: 1024px){
        flex-direction: row;
        width: 81%;
        .Imagens{
            border-top-left-radius: 0rem;
            border-top-right-radius: 0rem;
            height: 43.3rem;
        }

        .Textos{
            border-bottom-left-radius: 0rem;
            border-bottom-right-radius: 0rem;
            padding: 3rem;
            align-items: start;

            div{
                flex-direction: column;
                h2{
                    width: 100%;
                    font-size: 4rem;
                    margin-bottom: 3.3rem;
                }
                p{
                    width: 100%;
                    margin-left: 0;
                    font-size: 2.6rem;
                    font-weight: normal;
                }
            }

            p{
                width: 40rem;
            }

            a{
                p{
                    width: auto;
                }
            }
        }
    }
`