import { typesProducts } from "../types/types"

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) { 
        case typesProducts.addProduct:
            return{
                products: [action.payload]
            }
        case typesProducts.listProduct:
            return{
                products: [...action.payload]
            }
        case typesProducts.deleteProduct:
            return{
                products: state.products.filter(p => p.codigo !== action.payload)
            }
        case typesProducts.searchProduct:
            return{
                products: state.products.filter(p => p.nameProduct.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
            }
        case typesProducts.detailProduct:
            return{
                ...state,
                detailProduct: [action.payload]
            }
            
        default:
            return state
    }
}