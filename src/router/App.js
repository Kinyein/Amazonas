import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import DashBoardRoutes from './DashBoardRoutes'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const App = () => {

  const [checking, setChecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
      setChecking(false)
    })
  }, [setIsLogged, setChecking])

  if (checking) {
    return (
      <h1>Cargando...</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoutes isAuth={isLogged}>
            <Login />
          </PublicRoutes>
        } />

        <Route path="/register" element={
          <PublicRoutes isAuth={isLogged}>
            <Register />
          </PublicRoutes>
        } />

        <Route path="/*" element={
          <PrivateRoutes isAuth={isLogged}>
            <DashBoardRoutes />
          </PrivateRoutes>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App