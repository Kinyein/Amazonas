import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import Cart from '../components/Cart'
import DetailProduct from '../components/DetailProduct'
import ListProduct from '../components/ListProduct'
import Navbar from '../components/Navbar'

const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default DashBoardRoutes