import React from 'react';
import './host.scss';


const Host = ({hostName, hostImg}) => {
    return(
        <div className='host'>
            <p className='hostText'>{hostName}</p>
            <img src={hostImg} alt='Image de profil' className='hostImg'></img>
        </div>
    )
}

export default Host