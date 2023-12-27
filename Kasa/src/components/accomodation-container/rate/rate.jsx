import React from 'react';
import './rate.scss';
import Star from './../../../assets/rate_star.png';
import ColorStar from './../../../assets/rate_star_color.png';

const Rate = () => {
    return(
        <div className='rateStars'>
            <img src={ColorStar} alt='notation' className='stars'></img>
            <img src={ColorStar} alt='notation' className='stars'></img>
            <img src={ColorStar} alt='notation' className='stars'></img>
            <img src={Star} alt='notation' className='stars'></img>
            <img src={Star} alt='notation' className='stars'></img>
        </div>
    )
}

export default Rate