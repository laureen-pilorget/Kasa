import React from 'react';
import Logo from './../../assets/logo-color.png';
import './header.scss';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <header className='header'>
            <img src={Logo} alt='Logo Kasa' className='logo'></img>
            <nav className='menu'>
                <NavLink to='/'className='header__link'>Accueil</NavLink>
                <NavLink to='/About'className='header__link'>A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header