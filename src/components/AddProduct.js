import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ContainerForm, Error } from '../styles/formsStyle';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../actions/producstActions';
import { FileUp } from '../helpers/FileUp';
import Swal from 'sweetalert2';
import uuid from 'react-uuid'

const SignupSchema = Yup.object().shape({
  nameProduct: Yup.string().min(2, "El nombre es muy corto").max(200, "El nombre no debe superar los 200 caracteres").required('El nombre es obligatorio'),
  description: Yup.string().max(500, "La descripcion debe ser menor a 500 caracteres").required("Descripcion requerida"),
  price: Yup.string().required('El producto debe tener un precio')
});

const AddProduct = () => {

  const dispatch = useDispatch()

  const [cloudImg, setCloudImg] = useState({
    img: '',
    img2: '',
    img3: ''
  })

  const {img, img2, img3} = cloudImg

  const handleFileChange = ({target}) => {
    const file = target.files[0]
    
    FileUp(file)
      .then(resp => {
        setCloudImg({
          ...cloudImg,
          [target.name]: resp
        })
        console.log(cloudImg)
      })
      .catch(error => console.log(error))

      
  }

  return (
    <ContainerForm>
      <h1>Añadir Producto</h1>
      <Formik
        initialValues={{
          nameProduct: '',
          description: '',
          price: '',
          codigo: uuid()

        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          const {nameProduct, description, price, codigo } = values
          dispatch(addProductAsync({nameProduct, description, price, img, img2, img3, codigo}))
          // console.log(img);
          // console.log(img2);
          // console.log(img3);
          console.log(codigo)

          Swal.fire({
            icon: 'success',
            title: 'Ahora puedes ver el producto en inicio',
            showConfirmButton: false,
            timer: 2000
          })
        }}
      >
        {({ errors, touched, handleSubmit, handleChange, handleReset }) => (
          <Form onSubmit={handleSubmit} autoComplete='off'>
            <Field name="nameProduct" placeholder="Nombre Producto" />
            {errors.nameProduct && touched.nameProduct ? (
              <Error>{errors.nameProduct}</Error>
            ) : null}

            <Field name="description" placeholder="Descripcion" />
            {errors.description && touched.description ? (
              <Error>{errors.description}</Error>
            ) : null}

            <Field name="price" type="number" step="any" placeholder="Precio" />
            {errors.price && touched.price ? (
              <Error>{errors.price}</Error>
            ) : null}

            <label>Imagen del producto</label>
            <Field name="img" type="file" onChange={handleFileChange}/>

            <label>Imagen 2 del producto</label>
            <Field name="img2" type="file" onChange={handleFileChange}/>

            <label>Imagen 3 del producto</label>
            <Field name="img3" type="file" onChange={handleFileChange}/>

            <button type="submit">Añadir</button>
          </Form>
        )}
      </Formik>

    </ContainerForm>
  )
}

export default AddProduct