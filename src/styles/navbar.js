import styled from "styled-components";

export const NavBarStyled = styled.nav`
    background-color: #131921;
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (max-width: 950px){
        justify-content: center;
    }

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 40%;
        margin: 20px;

        input{
            width: 100%;
            height: 100%;
            padding: 0 20px;
            border: none;
            outline: none;
            border-radius: 8px 0px 0px 8px;
        }

        button{
            height: 100%;
            width: 40px;
            border: none;
            background-color: #F0AD64;
            border-radius: 0px 8px 8px 0px;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media screen and (max-width: 950px){
            width: 100%;
        }
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        flex-wrap: wrap;
        list-style: none;
        margin: 10px 50px;

        li{
            cursor: pointer;
            transition: .3s;

            a{
                color: #fff;
                text-decoration: none;
            }

            a:active{
                color: grey;
            }

            .iconCart{
                font-size: 30px;
            }
        }

        li:hover{
            text-decoration: underline;
            transform: scale(1.05);
        }
    }

    a.linkLogo{
        color: #fff;
        font-size: 18px;
        text-decoration: none;
        text-align: center;
        margin: 1%;
    }

    h1{
        font-size: 25px;
    }

    img{
        width: 100px;
    }
`