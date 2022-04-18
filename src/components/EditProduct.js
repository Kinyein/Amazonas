import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { ContainerForm, Error } from '../styles/formsStyle';
import { editProductAsync } from '../actions/producstActions';
import Swal from 'sweetalert2';

const SignupSchema = Yup.object().shape({
  nameProduct: Yup.string().min(2, "El nombre es muy corto").max(200, "El nombre no debe superar los 200 caracteres").required('El nombre es obligatorio'),
  description: Yup.string().max(500, "La descripcion debe ser menor a 500 caracteres").required("Descripcion requerida"),
  price: Yup.string().required('El producto debe tener un precio')
});

const EditProduct = ({ toEdit }) => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  console.log(toEdit)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContainerForm>
              <Formik
                initialValues={{
                  codigo: toEdit.codigo,
                  nameProduct: toEdit.nameProduct,
                  description: toEdit.description,
                  price: toEdit.price,
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  dispatch(editProductAsync(values.codigo, values))
                  Swal.fire({
                    icon: 'success',
                    title: 'Editado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  navigate('/')
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

                    <button type="submit" onClick={handleSubmit}>
                      Save
                    </button>
                  </Form>
                )}
              </Formik>
            </ContainerForm>
          </Modal.Body>


        </Modal>
      </>
    </div>
  );
};

export default EditProduct;