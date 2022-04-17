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
    cursor: pointer;
    transition: .3s;

    &:hover{
        transform: scale(1.05);
    }

    img{
        border-radius: 8px 8px 0px 0px;
    }

    div{
        margin: 10px 2px;

        h4{
            font-size: 18px;
        }

        p{
            font-size: 18px;
            color: #AF2913;
        }
    }

    button.closeButton{
        position: absolute;
        right: 10px;
        top: 10px;
        width: 20px;
        height: 20px;
        border-radius: 5px;
        border: none; 
        background-color: #000;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
        transition: .3s;
    }
    button.closeButton:hover{
        background-color: #AF2913;
        border-radius: 3px;
        transform: scale(1.1);
    }
`