import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import DetailProduct from '../components/DetailProduct'
import EditProduct from '../components/EditProduct'
import ListProduct from '../components/ListProduct'
import Navbar from '../components/Navbar'

const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route path="/detail" element={<DetailProduct />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default DashBoardRoutes