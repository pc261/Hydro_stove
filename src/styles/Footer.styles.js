import styled from "styled-components";

export const FooterContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #Logo{
        width: 85%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 2rem;
        letter-spacing: 0.285rem;
        margin-left: -5rem;
        
        img{
            width: 9.5rem;
            margin-right: -2rem;
        }
    }
`

export const FooterBox = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #Informacoes{
        width: 20rem;
        height: 19rem;
        display: flex;
        flex-direction: column;

        #Contatos{
            width: 17.8rem;
            height: 14.1rem;
            display: flex;
            flex-direction: column;
            align-items: left;
            gap: 1.4rem;

            h3{
                color: #fff;
                margin-left: 1.9rem;
                font-size: 1.2rem;
                font-family: 'Roboto', sans-serif;
                font-weight: bold;
            }

            div{
                display: flex;
                gap: 0.9rem;
                
                a{
                    font-size: 1.2rem;
                    text-decoration: none;
                    color: #fff;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 200;
                    letter-spacing: 0.03rem;
                }
            }
        }

        #RedesSociais{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.2rem;
            margin-right: 2rem;
            font-family: 'Roboto',sans-serif;
            font-weight: bold;
            color: #fff;
        }
    }

    #Navegacao{
        width: 9.3rem;
        height: 19rem;
        display: flex;
        flex-direction: column; 
        gap: 1.4rem;

        h3{
            color: #fff;
            font-size: 1.2rem;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            margin-bottom: 0.8rem;
        }

        a{
            font-size: 1.2rem;
            text-decoration: none;
            color: #fff;
            font-family: 'Roboto', sans-serif;
            font-weight: 200;
            letter-spacing: 0.03rem;
        }
    }
`