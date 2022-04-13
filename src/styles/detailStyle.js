import styled from "styled-components";

export const ContainerDetail = styled.div`
    display: flex;
    justify-content: space-around; 
    gap: 50px; 
    flex-wrap: wrap;
    margin: 20px 20px;

    img{
        max-width: 100% ;
    }
`
export const Price = styled.p`
    color: #AF2913;
`
export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 8px;
`
export const AddCartButton = styled.button`
    background-color: #F3D184;
    border: none;
    border-radius: 4px;
    margin: 8px;
    padding: 0 10px;
    /* width: 100%; */
    display: flex;
    align-items: center;

    div{
        background-color: #565959;
        padding: 4px;
        border-radius: 4px;
        margin: 4px 8px;
        color: #fff;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const BuyNowButton = styled.button`
    background-color: #F0AD64;
    border: none;
    border-radius: 4px;
    margin: 8px;
    padding: 0 10px;
    display: flex;
    align-items: center;

    div{
        background-color: #565959;
        padding: 4px;
        border-radius: 4px;
        margin: 4px 8px;
        color: #fff;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const ReturnButton = styled.button`
    margin: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
`