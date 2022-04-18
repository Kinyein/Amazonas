import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItemCart } from '../actions/cartActions'
import { ContainerCart, DeleteButton, ItemCart } from '../styles/cartStyle'
import { Price } from '../styles/detailStyle'
import { IoClose } from 'react-icons/io5'

const Cart = () => {

    const dispatch = useDispatch()

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState()


    const getCart = () => {
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))

        if (cartLocalStorage) {
            setCart(cartLocalStorage)
            getTotal(cartLocalStorage)
        }

    }

    useEffect(() => {
        getCart()
    }, [])

    const getTotal = (cart) => {

        let total = []

        cart.forEach(({ price }) => {
            total.unshift(price)
        })

        let suma = total.reduce((previous, current) => current += previous);

        setTotalPrice(suma)

        console.log(total)

    }

    const deleteItem = (codigo) => {
        dispatch(deleteItemCart(codigo))
        getCart()
    }

    console.log(totalPrice)

    return (
        <ContainerCart>
            <h1>Carrito</h1>
            <div>

                {
                    cart.map(({ img, nameProduct, price, codigo }, index) => (
                        <ItemCart key={index}>
                            <img src={img} alt="" />

                            <div>
                                <p>{nameProduct}</p>
                                <Price>&#36;{price}</Price>
                            </div>

                            <DeleteButton onClick={() => deleteItem(codigo)}><IoClose /></DeleteButton>
                        </ItemCart>

                    ))
                }

                <Price>Total: &#36;{totalPrice}</Price>

            </div>
        </ContainerCart>
    )
}

export default Cart