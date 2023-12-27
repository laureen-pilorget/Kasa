import React from 'react';
import ArrowImg from './../../assets/arrow.png';
import './collaps.scss';

const Collaps = ({collapsTitle,collapsText}) => {
    return(
        <div className='collaps'>
            <div className='visible'>
                <div className='collaps__title'>{collapsTitle}</div>
                <img src={ArrowImg} alt='flèche' className='collaps__img'></img>
            </div>
            <div className='collaps__text__array'>
                {/* Si le props est un tableau */}
                {Array.isArray(collapsText) ? (
                    // Alors on le parcourt en tant que liste
                    collapsText.map (item => <li key={item} >{item}</li>)
                    // Sinon
                ) : (
                    // C'est un paragraphe
                    <p className='collaps__text'>{collapsText}</p>
                )}
            </div>            
        </div>
    )
}

export default Collaps