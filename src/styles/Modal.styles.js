import styled from "styled-components";

export const Pop = styled.section`

    div {
        width: 15.6rem;
        height: 22.5rem;
        flex-direction: column;
        gap: 2.3rem;
        position: absolute;
        top: 3%;
        right: 3%;
        z-index: 1;
        background-color: #212121;
        border-radius: .9rem;
        padding-bottom: 1.2rem;
    }


    img {
        width: 1rem;
        height: 1.6rem;
        display: inline-block;
    }

    .link{
        width: 100%;
        color: #FFFFFF;
        font-size: 1.2rem;
        font-family: "Roboto", sans-serif;
        letter-spacing: .2rem;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .X{
        font-family: "Inter", sans-serif;
        font-weight: bold;
        font-size: 1.6rem;
        color: #FFFFFF;
        text-decoration: none;
        margin-bottom: -1.6rem;
        text-align: right;
        width: 80%;
    }
`