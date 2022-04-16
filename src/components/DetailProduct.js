import React from 'react'
import { BsCart3, BsPlayFill } from 'react-icons/bs'
import ReactImageMagnify from 'react-image-magnify'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddCartButton, BuyNowButton, ContainerButtons, ContainerDetail, Price, ReturnButton } from '../styles/detailStyle'

const DetailProduct = () => {

    const navigate = useNavigate()

    // const detailProduct = useSelector(store => store)

    const detailProduct = JSON.parse(localStorage.getItem('detailProduct'))

    console.log(detailProduct)

    const { nameProduct, description, price, img, img2, img3 } = detailProduct[0]

    const backToHome = () => {
        navigate("/")
    }

    return (
        <div>

            <ReturnButton onClick={backToHome}>&#60; Volver a los resultados</ReturnButton>

            <ContainerDetail>

                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'nameProduct',
                        isFluidWidth: true,
                        src: img
                    },
                    largeImage: {
                        src: img,
                        width: 1200,
                        height: 1000
                    }
                }} />

                {/* <img src={img} />
                <img src={img2} />
                <img src={img3} /> */}

                <div>
                    <h4>{nameProduct}</h4>
                    <Price>&#36;{price}</Price>
                    <p>{description}</p>
                </div>

                <ContainerButtons>

                    <Price>&#36;{price}</Price>

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