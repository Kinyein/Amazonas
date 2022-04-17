import { typesProducts } from "../types/types"

const initialState = {
    products: [],
    detailProduct: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) { 
        case typesProducts.addProduct:
            return{
                ...state,
                products: [action.payload]
            }
        case typesProducts.editProduct:
            return{
                ...state
            }
        case typesProducts.listProduct:
            return{
                ...state,
                products: [...action.payload]
            }
        case typesProducts.deleteProduct:
            return{
                ...state,
                products: state.products.filter(p => p.codigo !== action.payload)
            }
        case typesProducts.searchProduct:
            return{
                ...state,
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