import React from 'react';
import './writings.scss';

const Writings = ({writingsTitle, writingsText}) => {
    return(
        <div className='text'>
            <div className='writingsTitle'>{writingsTitle}</div>
            <p className='writingsText'>{writingsText}</p>
        </div>
    )
}

export default Writings