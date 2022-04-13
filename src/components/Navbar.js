import React from 'react'
import logo from '../img/logo-amazon.png'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { NavBarStyled } from '../styles/navbar'
import { logout } from '../actions/loginActions';

const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
        console.log('Logout')
    }

    return (
        <div>
            <NavBarStyled>
                <Link to="/">
                    <img src={logo} alt='' />
                </Link>

                <form>
                    <input
                        type="text"
                    />
                    <button><BiSearchAlt2 /></button>
                </form>

                <ul>
                    <li><Link to="/add">Agregar Producto</Link></li>
                    <li><Link to="/edit">Editar Producto</Link></li>
                    <li><Link to="/link" onClick={handleLogout}>Logout</Link>Logout</li>
                </ul>
            </NavBarStyled>
        </div>
    )
}

export default Navbar