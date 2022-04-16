import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ContainerForm, Error } from '../styles/formsStyle';
import { registerAsync } from '../actions/registerActions';


//-------------- Validacion de cada input -----------------//
const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, "El nombre es muy corto").max(50, "El nombre es demasiado largo").required('El nombre es obligatorio'),
    email: Yup.string().email("Tiene que escribir un correo valido, @gmail, @hotmail, etc").min(10, "El correo es muy corto").max(50, "El correo es demasiado largo").required("El email es obligatorio"),
    pass1: Yup.string().min(5, 'La contraseña debe ser mayor a 5 caracteres').max(10, 'La contraseña no debe de pasar los 10 caracteres').required('La contrasaña es obligatoria').oneOf([Yup.ref('pass2')], 'Las contraseñas no coinciden'),
    pass2: Yup.string().min(5, 'La contraseña debe ser mayor a 5 caracteres').max(10, 'La contraseña no debe de pasar los 10 caracteres').required('La contrasaña es obligatoria')
});

const Register = () => {

    const dispatch = useDispatch()

    return (
        <ContainerForm>
            <h1>Registrarse</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    pass1: '',
                    pass2: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    dispatch(registerAsync(values.name, values.email, values.pass1))
                    console.log(values);
                }}
            >
                {({ errors, touched, handleSubmit, handleChange, handleReset }) => (
                    <Form onSubmit={handleSubmit} autoComplete='off'> 
                        <Field name="name" placeholder="Nombre" />
                        {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                        ) : null}

                        <Field name="email" placeholder="Email" />
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : null}

                        <Field name="pass1" type="password" placeholder="Password" />
                        {errors.pass1 && touched.pass1 ? <Error>{errors.pass1}</Error> : null}

                        <Field name="pass2" type="password" placeholder="Confirmar Password" />
                        {errors.pass2 && touched.pass2 ? <Error>{errors.pass2}</Error> : null}

                        <button type="submit">Registrarse</button>
                    </Form>
                )}
            </Formik>
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link></p>
        </ContainerForm>
    )
};

export default Register