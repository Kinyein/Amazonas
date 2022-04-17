import { typesCart } from "../types/types"

export const addToCartAction = (cartArr) => {
    return{
        type: typesCart.addToCart,
        payload: cartArr
    }
}