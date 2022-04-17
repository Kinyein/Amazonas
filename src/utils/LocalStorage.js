export const getLocalStorage = () => {
    const detailProductStorage = localStorage.getItem('detailProduct')

    if (detailProductStorage === undefined || detailProductStorage === null) {
        return localStorage.setItem('detailProduct', [])
    }

    return JSON.parse(detailProductStorage)
}

export const saveLocalStorage = (state) => {
    const detailProduct = JSON.stringify(state)
    localStorage.setItem('detailProduct', detailProduct)
}