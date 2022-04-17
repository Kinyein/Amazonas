import React from 'react'
import logo from '../img/logoamazonas.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { NavBarStyled } from '../styles/navbar'
import { logoutAsync } from '../actions/loginActions';
import { useState } from 'react';
import { searchProductSinc } from '../actions/producstActions';

const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [searchBar, setSearchBar] = useState({
        currentSearch: ''
    })

    const { currentSearch } = searchBar

    const handleLogout = () => {
        dispatch(logoutAsync())
        navigate("/login")
        console.log('Logout')
    }

    const handleChange = ({ target }) => {
        setSearchBar({
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchProductSinc(currentSearch))
        // console.log(currentSearch)
    }

    return (
        <div>
            <NavBarStyled>
                <Link to="/" className='linkLogo'>
                    <h1>AMAZONAS</h1>
                    <img src={logo} alt='' />
                </Link>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <input
                        type="text"
                        name='currentSearch'
                        onChange={handleChange}
                        value={currentSearch}
                    />
                    <button><BiSearchAlt2 /></button>
                </form>

                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/add">Agregar Producto</Link></li>
                    <li onClick={handleLogout}>Logout</li>
                    <li><Link to="/cart"><AiOutlineShoppingCart className='iconCart' /></Link> </li>
                </ul>
            </NavBarStyled>

        </div>
    )
}

export default Navbar