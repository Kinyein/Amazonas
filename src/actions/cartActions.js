import { typesCart } from "../types/types"

export const addToCartAction = (cartArr) => {
    return {
        type: typesCart.addToCart,
        payload: cartArr
    }
}

export const deleteItemCart = (codigo) => {

    const cart = JSON.parse(localStorage.getItem('cart'))

    const cartItemDeleted = cart.filter(i => i.codigo !== codigo)
    console.log(cartItemDeleted)

    localStorage.setItem('cart', JSON.stringify(cartItemDeleted))

    return {
        type: typesCart.deleteItemCart,
        payload: cartItemDeleted
    }
}