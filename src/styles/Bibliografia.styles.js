import styled from "styled-components";

export const Letreiro = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4.2rem;
    margin-bottom: 7.8rem;


    h1 {
        font-size: 5rem;
        color: #BDBDBD;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
    }

    h2 {
        font-size: 5rem;
        color: #333333;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }

    @media (min-width: 1440px) {
        width: 81%;
        display: block;

        margin-top: 24.3rem;
        margin-bottom: 16.9rem;

        h1, h2 {
            width: 100%;
            text-align: left;
        }

       
    }
`

export const Referencia = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6.9rem;
    margin-bottom: 6.9rem;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #20483D;
        width: 84%;
        padding-block: 4.7rem;
        gap: 7.2rem;
        text-align: center;

        h1{
            color: #BDBDBD;
            font-size: 2.4rem;
            font-family: 'Roboto',sans-serif;
            font-weight: 300;
            text-transform: uppercase;
            max-width: 85%;
            text-align: left;
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
        width: 81%;
        gap: 0.1rem;
        background-color: #fff;
        flex-direction: row;
    
    }
    
`