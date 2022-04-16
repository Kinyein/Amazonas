import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginEmailPassAsync, loginFacebook, loginGoogle } from '../actions/loginActions';
import { ContainerForm, Error, LoginGoogleFace } from '../styles/formsStyle';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Tiene que escribir un correo valido, @gmail, @hotmail, etc").min(10, "El correo es muy corto").max(50, "El correo es demasiado largo").required("El email es obligatorio"),
  password: Yup.string().min(3, 'La contraseña debe ser mayor a 5 caracteres').max(10, 'La contraseña no debe de pasar los 10 caracteres').required('La contrasaña es obligatoria')
});

const Login = () => {

  const dispatch = useDispatch()

  const handleGoogle = () => {
    dispatch(loginGoogle())
  }

  const handleFacebook = () => {
    dispatch(loginFacebook())
  }

  return (
    <ContainerForm>

      <h1>Login</h1>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          dispatch(loginEmailPassAsync(values.email, values.password))
          console.log(values);
        }}
      >
        {({ errors, touched, handleSubmit, handleChange, handleReset }) => (
          <Form autoComplete='off'>

            <Field name="email" placeholder="Email" />
            {errors.email && touched.email ? (
              <Error><p><i>! </i>{errors.email}</p></Error>
            ) : null}

            <Field name="password" type="password" placeholder="Password" />
            {errors.password && touched.password ? <Error><p><i>! </i>{errors.password}</p></Error> : null}

            <button type="submit">Iniciar Sesión</button>
            
          </Form>
        )}

      </Formik>

      <p>O inicia sesión con Google o Facebook</p>

      <LoginGoogleFace>
        <FcGoogle className='icon' onClick={handleGoogle}/>
        <BsFacebook className='icon' onClick={handleFacebook}/>
      </LoginGoogleFace>

      <p>¿Aun no tienes una cuenta? <Link to="/register">Registrarse</Link></p>

    </ContainerForm>
  )
}

export default Login