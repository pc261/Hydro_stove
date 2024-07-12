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



    @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
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

    @media (min-width: 1024px) {
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
// Estilização do Conteúdo principal da página 

export const BannerInicial = styled.section`
    background-image: url(/FolhasBanner.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 25.5rem;
    margin-top: 4.4rem;

    div{
        width: 30rem; 
        margin-top: 3.322rem;
        margin-left: 1.281rem;
        font-family: "Roboto", sans-serif;
        font-size: 5.5rem;
        color: #FFF;
    }
    div p{
        text-align: right;
        color: #D8D8D8;
        font-weight: 300;
    }

    @media (min-width: 1440px) {
        margin-top: 7.9rem;
        height: 70rem;
        background-size: cover;

        div{
            width: 27.1rem;
            margin-top: 10.8rem;
            margin-left: 4.3rem;
            font-size: 6.4rem;
        }
    }
`
export const SobreContainer  = styled.section`
   display: flex;
   justify-content: center;
   width: 100%;
   margin-top: 7.6rem;
`
export const SobreInicial = styled.div`

    width: 81svw;
    border-radius: 1.5rem;
    background-color: #20483D;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    #textos{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin-bottom: 4.3rem;
    }
   

   h2{
     font-family: "Roboto", sans-serif;
     font-weight: 300;
     font-size: 6.4rem;
     margin-top: 5.2rem;
     margin-bottom: 3.4rem;
    
     color: #BDBDBD;

   }

    p{

        font-family: "Arimo", sans-serif;
        font-size: 1.5rem;
        text-align: justify;
        line-height: 2.5rem;
        color: #FFF;

        width: 82%;
   }

   ul{

    display: flex;
    flex-direction: column;
    align-items: center;

   }

   li{
        font-family: "Arimo", sans-serif;
        font-size: 1.5rem;
        text-align: justify;
        line-height: 2.5rem;
        color: #FFF;

        width: 82%;
        
   }

   @media(min-width: 1440px){
    
        width: 92%;
        flex-direction: row;

        #textos{
            margin-left: 7.1rem;
            margin-right: 3.9rem;
        }

        h2{
            font-weight: normal;
            color: #FFF;
            width: 100%;
            text-align: left;
            margin-top: 3.2rem;
            margin-bottom: 1.7rem;
        }

        p{
            font-size: 2.6rem;
            line-height: 3.0rem;
            width: 49.5rem;
        }

        li{
            font-size: 2.6rem;
            line-height: 3.0rem;
            width: 49.5rem;
        }
   }
`
export const ImagensSobre = styled.div`
    display: none;

    @media(min-width: 1440px){
        display: flex;
        flex-direction: column;
        gap: 4.8rem;
        margin-left: 4.0rem;
    }
`
export const NossaMissaoContainer = styled.section`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin-top: 7.5rem;
    color: #BDBDBD;

    font-size: 6.4rem;
    gap: 7.5rem;
    
    h2{
        font-family: "Roboto", sans-serif;
        font-weight: 300;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 7.5rem;
    }

    div{

        width: 83%;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        

        gap: 3rem;

        h2{
            font-size: 20rem;
            color: #707070;
            font-family: "Roboto", sans-serif;
            font-weight: bolder;
        }

        p{
            font-size: 1.5rem;
            text-align: justify;
            white-space: 1rem;
            line-height: 3.6rem;
            font-family: "Arimo", sans-serif;

        }
    }

    @media(min-width: 1440px){
        width: 92%;
        background-color: #20483D;
        border-radius: 1.5rem;
        color: #fff;

        h2{
            margin-top: 4.8rem;
        }

        section{
            width: 87%;
            flex-direction: row;
            gap: 9.8rem;
            margin-bottom: 9.7rem;
        }

        #div_inversa{
            display: flex;
            flex-direction: row-reverse;
        }

        div{

            h2{
                color: #fff;
            }
            p{
                font-size: 2.6rem;
            }

        }

    }

`
export const ImagensContainer = styled.section`
    margin-top: 7.2rem;
    margin-bottom: 9.2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        display: none;
    }

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

    #ImagensDesktop{
        display: none;
    }

    a{
        width: 22.2rem;
        height: 7.1rem;
        border-radius: 1.5rem;
        background-color: #20483D;

        display: flex ;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        color: #FFF;
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        font-size: 1.2rem;
        letter-spacing: 0.5rem;
    }

    @media(min-width: 1024px){
        
        margin-bottom: 6.8rem;

        h2{
            width: 81%;
            display: block;
            margin-bottom: 6rem;

            font-family: "Roboto", sans-serif;
            font-weight: 400;
            text-align: left;
            color: #BDBDBD;
            font-size: 6.4rem;
        }

        #ImagensMobile{
            width: 81%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 3rem;

            img{
                width: 48%;
                height: 25.5rem;
                border-radius: 1rem;
            }
        }

        #ImagensDesktop{
            width: 81%;
            display: flex;
            justify-content: space-between;
            margin-bottom: 12.4rem;

            img{
                width: 31%;
                height: 25.5rem;
                border-radius: 1rem;
            }
        }

        a{
            width: 42.4rem;
            height: 13.7rem;
            margin-bottom: 6.8rem;

            font-size: 2.4rem;

        }
    }
`
