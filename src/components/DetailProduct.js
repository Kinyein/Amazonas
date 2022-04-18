import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { BsCart3, BsPlayFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import ReactImageMagnify from 'react-image-magnify'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCartAction } from '../actions/cartActions'
// import Carousel from 'react-elastic-carousel';
import { AddCartButton, BuyNowButton, ContainerButtons, ContainerDetail, EditButton, Price, ReturnButton } from '../styles/detailStyle'
import EditProduct from './EditProduct'
import Swal from 'sweetalert2'
import ReactSlick from 'react-slick'

const DetailProduct = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()


    const [toEdit, setToEdit] = useState(false)
    const [sendToEdit, setSendToEdit] = useState([])

    const [imgProduct, setImgProduct] = useState([])

    const storageState = useSelector(store => store)

    console.log(storageState)

    const detailProduct = JSON.parse(localStorage.getItem('detailProduct'))

    console.log(detailProduct)

    const { nameProduct, description, price, img, img2, img3 } = detailProduct[0]

    const backToHome = () => {
        navigate("/")
    }


    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    const cart = []


    const addToCart = () => {

        cart.unshift(detailProduct[0]);

        dispatch(addToCartAction(cart))

        if (cartLocalStorage !== null) {
            cartLocalStorage.unshift(detailProduct[0])
            localStorage.setItem('cart', JSON.stringify(cartLocalStorage));

        } else {
            cart.unshift(detailProduct[0]);
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        Swal.fire({
            icon: 'success',
            title: 'Agregado al carrito',
            showConfirmButton: false,
            timer: 1200
        })
        console.log(cart)
    }

    // const items = [
    //     { id: 1, title: 'item #1' },
    //     { id: 2, title: 'item #2' },
    //     { id: 3, title: 'item #3' },
    //     { id: 4, title: 'item #4' },
    //     { id: 5, title: 'item #5' }
    // ]

    const edit = () => {

        setToEdit(true)
        setSendToEdit(detailProduct[0])

        console.log(sendToEdit)
    }

    return (
        <div>

            <ReturnButton onClick={backToHome}>&#60; Volver a los resultados</ReturnButton>

            <ContainerDetail>

                {/* <ReactSlick
                    {...{
                        // dots: true,
                        infinite: true,
                        // speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }}
                >
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Versace',
                                isFluidWidth: true,
                                src: img,
                                sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                            },
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1000
                            },
                        }}
                    />

                </ReactSlick> */}

                {/* <Carousel>---------Easy carousel with react-elastic-carousel-----------
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
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'nameProduct',
                            isFluidWidth: true,
                            src: img2
                        },
                        largeImage: {
                            src: img2,
                            width: 1200,
                            height: 1000
                        }
                    }} />
                </Carousel> */}

                <Carousel>
                    <Carousel.Item>
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
                    </Carousel.Item>
                    <Carousel.Item>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'nameProduct',
                                isFluidWidth: true,
                                src: img2
                            },
                            largeImage: {
                                src: img2,
                                width: 1200,
                                height: 1000
                            }
                        }} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'nameProduct',
                                isFluidWidth: true,
                                src: img3
                            },
                            largeImage: {
                                src: img3,
                                width: 1200,
                                height: 1000
                            }
                        }} />
                    </Carousel.Item>

                </Carousel>

                {/* <ReactImageMagnify {...{
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
                }} /> */}

                <div>
                    <h4>{nameProduct}</h4>
                    <Price>&#36;{price}</Price>
                    <p>{description}</p>
                </div>

                <ContainerButtons>

                    <Price>&#36;{price}</Price>

                    <AddCartButton onClick={addToCart}>
                        <div >
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

                    <EditButton className='editButton' onClick={() => edit()}>
                        <div>
                            <AiFillEdit />
                        </div>
                        Editar
                    </EditButton>

                </ContainerButtons>

                {
                    toEdit === true ? <EditProduct toEdit={sendToEdit} /> : ''
                }
            </ContainerDetail>
        </div >
    )
}

export default DetailProduct