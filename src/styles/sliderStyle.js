import styled from "styled-components";

export const Slider = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .leftArrow{
        position: absolute;
        top: 50%;
        left: 10px; 
        font-size: 2.5rem;
        color: #000;
        cursor: pointer;
        z-index: 10;
        user-select: none;
    }

    .rightArrow{
        position: absolute;
        top: 50%;
        right: 10px; 
        font-size: 2.5rem;
        color: #000;
        cursor: pointer;
        z-index: 10;
        user-select: none;
    }

`