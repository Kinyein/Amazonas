import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { typesRegister } from "../types/types"

export const registerAsync = (name, email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then( async ({ user }) => {
                console.log(user)
                await updateProfile(auth.currentUser, {displayName: name})
                dispatch(registerSinc(name, email, password))
                alert('Usuario creado correctamente')
            })
            .catch(error => {
                console.warn(error, 'Usuario no registrado')
            })
    }
}

export const registerSinc = (name, email, password) => {
    return {
        type: typesRegister.register,
        payload: {
            name, email, password
        }
    }
}