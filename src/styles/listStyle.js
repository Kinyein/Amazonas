import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    margin: 2%;
`

export const CardProduct = styled.div`
    max-width: 300px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        width: 90%;
    }

    div{
        margin: 10px 2px;
    }
`