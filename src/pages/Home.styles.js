
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

    }
    img{
        width: 11rem;
    }
    @media (min-width: 1024px) {
        
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
`