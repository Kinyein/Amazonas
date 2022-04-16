import Aos from 'aos'
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deleteProductAsync, getDetailProduct, listProductAsync } from '../actions/producstActions';
import { CardProduct, CardsContainer } from '../styles/listStyle'
import Swal from 'sweetalert2';

const ListProduct = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { products } = useSelector(store => store.products)

  console.log(products)

  useEffect(() => {
    dispatch(listProductAsync())
  }, [])

  const deleteProduct = (codigo) => {
    Swal.fire({
      title: '¿Desea borrar el producto?',
      showDenyButton: true,
      denyButtonText: `Borrar`,
      confirmButtonText: 'Cancel',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {

        dispatch(deleteProductAsync(codigo))

        Swal.fire('Eliminado', '', 'success')
      }
    })

  }

  const sendDetailProduct = (detail) => {
    dispatch(getDetailProduct(detail))
    navigate("/detail")
  }


  Aos.init();

  return (
    <CardsContainer>
      {
        products.map((p, index) => (
          <div key={index} data-aos="fade-up">
            <CardProduct onClick={() => sendDetailProduct(p)}>

              <button className='closeButton' onClick={() => deleteProduct(p.codigo)}><IoClose className='iconClose' /></button>

              <img src={p.img} />

              <div>
                <h4>{p.nameProduct}</h4>
                <p>&#36;{p.price}</p>
              </div>
            </CardProduct>
          </div>
        ))
      }
    </CardsContainer>
  )
}

export default ListProduct