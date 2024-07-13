import styled from "styled-components";

export const FooterContainer = styled.section`
    background-color: black;
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
    @media(min-width: 1024px){
        border-top: 0.1rem solid #27272A;
        flex-direction: row-reverse;
        padding-bottom: 3.4rem;
        padding-top: 3.4rem;
        #Logo{
            width: 16%;
            margin-right: 11.6rem;
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
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
            }
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

    @media(min-width: 1024px){
        flex-direction: row-reverse;
        width: 62%;
        justify-content: center;
        align-items: first baseline;
        gap: 15%;

        #Informacoes{
            width: 63%;
            flex-direction: row;
            align-items: center;
            gap: 28%;

            #Contatos{
                width: 21.8rem;

                h3{
                    font-size: 1.6rem;
                }

                div{
                    width: 21.7rem;
                    font-size: 1.4rem;
                }
            }
            
            #RedesSociais{
                flex-direction: column;
                align-items: center;
                margin-right: 0rem;
                gap: 2.6rem;

                p {
                    width: 100%;
                    font-size: 1.6rem;
                }

                div{
                    gap: 3rem;
                }
            }
        }

        #Navegacao{
            h3{
                font-size: 1.6rem;
            }

            a{
                font-size: 1.4rem;
            }
        }

        
    }
`