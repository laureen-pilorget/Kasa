import React from 'react';
import Logo from './../../assets/logo.png';
import './footer.scss';

const Footer = () => {
    return(
        <footer className='footer'>
            <img src={Logo} alt='Logo Kasa' className='logoBW'></img>
            <p className='reserved'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer