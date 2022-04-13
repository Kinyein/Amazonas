import React from 'react'
import { BsCart3, BsPlayFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AddCartButton, BuyNowButton, ContainerButtons, ContainerDetail, Price, ReturnButton } from '../styles/detailStyle'

const DetailProduct = () => {

    const navigate = useNavigate()

    return (
        <div>

            <ReturnButton onClick={() => navigate(-1)}>&#60; Volver a los resultados</ReturnButton>

            <ContainerDetail>
                <img src="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SX679_.jpg" />

                <div>
                    <h4>TitleProduct</h4>
                    <Price>PriceProduct</Price>
                    <p>AboutProduct</p>
                </div>

                <ContainerButtons>

                    <Price>PriceProduct</Price>

                    <AddCartButton>
                        <div>
                            <BsCart3 />
                        </div>
                        Agregar al carrito
                    </AddCartButton>

                    <BuyNowButton>
                        <div>
                            <BsPlayFill />
                        </div>
                        Comprar ahora
                    </BuyNowButton>
                </ContainerButtons>
            </ContainerDetail>
        </div>
    )
}

export default DetailProduct