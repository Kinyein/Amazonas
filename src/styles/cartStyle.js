import styled from "styled-components";

export const ContainerCart = styled.div`
    margin: 30px;
`
export const ItemCart = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 100%;
    margin: 20px;

    img{
        width: 200px; 
    }

    div{
        max-width: 500px;
    }
`
export const DeleteButton = styled.button`
    align-self: center;
    position: absolute;
    right: 20px;
    padding: 5px;
    border-radius: 5px;
    margin: 20px;
    border: none; 
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    cursor: pointer;
    transition: .3s;
    

    &:hover{
        background-color: #AF2913;
        border-radius: 3px;
        transform: scale(1.1);
    }
`