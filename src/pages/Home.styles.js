import styled from "styled-components";

export const HeaderContainer = styled.header`
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
export const ButtonPages = styled.button`
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    hr{
        background-color: #fff;
        border: none;
        height: 0.3rem;
        width: 4rem;
    }

    @media (min-width: 1024px) {
        display: none;
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