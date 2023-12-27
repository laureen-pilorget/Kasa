import React from 'react';
import ArrowImg from './../../assets/arrow.png';
import './collaps.scss';

const Collaps = ({collapsTitle,collapsText}) => {
    return(
        <div className='collaps'>
            <div className='visible'>
                <h2 className='collaps__title'>{collapsTitle}</h2>
                <img src={ArrowImg} alt='flèche' className='collaps__img'></img>
            </div>
            <p className='collaps__text'>{collapsText}</p>
        
        </div>
    )
}

export default Collaps