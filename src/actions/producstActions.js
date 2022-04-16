import { async } from "@firebase/util"
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { dataBase } from "../firebase/firebaseConfig"
import { typesProducts } from "../types/types"

export const addProductAsync = (product) => {
    return (dispatch) => {
        addDoc(collection(dataBase, 'ProductsDB'), product)
            .then(resp => {
                dispatch(addProductSinc(product))
            })
            .catch(error => console.warn(error))
    }
}

export const addProductSinc = (product) => {
    return {
        type: typesProducts.addProduct,
        payload: product
    }
}

export const listProductAsync = () => {
    return async (dispatch) => {
        const getCollection = await getDocs(collection(dataBase, 'ProductsDB'))
        const products = []
        getCollection.forEach((doc) => {
            products.push({
                ...doc.data()
            })
        })

        dispatch(listProductSinc(products))
    }
}

export const listProductSinc = (products) => {
    return {
        type: typesProducts.listProduct,
        payload: products
    }
}

export const deleteProductAsync = (codigo) => {
    return async (dispatch) => {
        const getCollection = collection(dataBase, 'ProductsDB')
        const q = query(getCollection, where('codigo', '==', codigo))
        const getDataQ = await getDocs(q)
        getDataQ.forEach((d => {
            deleteDoc(doc(dataBase, "ProductsDB", d.id))
        }))
        dispatch(deleteProductSinc(codigo))
        dispatch(listProductAsync())
    }
}

export const deleteProductSinc = (codigo) => {
    return {
        type: typesProducts.deleteProduct,
        payload: codigo
    }
}

export const searchProductSinc = (search) => {
    return {
        type: typesProducts.searchProduct,
        payload: search
    }
}

export const getDetailProduct = (detailArr) => {
    return{ 
        type: typesProducts.detailProduct,
        payload: detailArr
    }
}