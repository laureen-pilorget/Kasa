import React from 'react';
import './rate.scss';
import Star from './../../../assets/rate_star.png';
import ColorStar from './../../../assets/rate_star_color.png';

const Rate = ({numberOfStars}) => {
    return(
        <div className='rateStars'>
            {/* Création d'un tableau de 5 valeurs */}
            {Array.from ({length:5}, (_, index) => (
                // Si l'index est inférieur à 5, alors il y aura le nombre restant d'étoiles en gris
                <img key = {index} src={index <numberOfStars ? ColorStar : Star} alt='notation'></img>  
            ))}
        </div>
    )
}

export default Rate