import React from 'react';
import { NavLink } from 'react-router-dom';
import './error404.scss'

const Error404 = () => {
    return(
        <main className='mainError'>
            <p className='error404'>404</p>
            <p className='text'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to='/'className='error__link'>Retourner sur la page d’accueil</NavLink>
        </main>
    )
}
export default Error404