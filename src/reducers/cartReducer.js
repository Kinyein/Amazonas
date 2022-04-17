import { typesCart } from "../types/types"

const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCart.addToCart:
            return{
                cart: action.payload
            }
            
        default:
            return state
    }
}