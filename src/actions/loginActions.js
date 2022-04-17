import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { facebook, google } from '../firebase/firebaseConfig'
import { typesLogin } from '../types/types'
// import toastr from 'toastr'

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
            })
            .catch(error => {
                console.log(error, 'No autorizado')
            })
    }
}

export const loginFacebook = () => {
    const auth = getAuth()

    signInWithPopup(auth, facebook)
        .then((resp, { user }) => {
            console.log(resp)
            alert('Usuario autorizado')
        })
        .catch((error) => {
            console.log(error)
            alert('Usuario no autorizado')
        })
}

export const loginEmailPassAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSinc(user.email, user.password))
                console.log('Usuario autorizado')
            })
            .catch(error => {
                console.warn(error, 'No autorizado')
            })
    }
}

export const loginSinc = (email, password) => {
    return {
        type: typesLogin.login,
        payload: {
            email, password
        }
    }
}

export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then(({ user }) => {
                dispatch(logoutSinc())
            })
            .catch(error => console.log(error))
    }
}

export const logoutSinc = () => {
    return {
        type: typesLogin.logout
    }
}