import React, { useEffect, useState } from 'react'
import { ItemCart } from '../styles/cartStyle'
import { Price } from '../styles/detailStyle'

const Cart = () => {

    const [cart, setCart] = useState([])

    const getCart = () => {
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))

        if (cartLocalStorage) {
            setCart(cartLocalStorage)
            console.log(cartLocalStorage)
        } else {
            console.log(cartLocalStorage)
            return (
                <h1>Tu carrito esta vacio</h1>
            )
        }
    }

    useEffect(() => {
        getCart()
    }, [])


    return (
        <div>
            <h1>Carrito</h1>
            <div>

                {
                    cart.map(({ img, nameProduct, price }) => (
                        <ItemCart>
                            <img src={img} alt="" />

                            <div>
                                <p>{nameProduct}</p>
                                <Price>&#36;{price}</Price>
                            </div>
                        </ItemCart>

                    ))
                }
            </div>
        </div>
    )
}

export default Cart