import React from 'react';
import './card.scss';

const Card = ({cardTitle,cardImg}) => {
    return(
        <div className='card'>
            <div className='card__filter'></div>
            <img src={cardImg} alt='logement' className='card__img'></img>
            <p className='card__title'>{cardTitle}</p>
        </div>
    )
}

export default Card