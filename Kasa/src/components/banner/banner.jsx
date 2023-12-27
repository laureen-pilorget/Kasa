import React from 'react';
import './banner.scss';

const Banner = ({bannerImg,bannerText}) => {
    return(
        <div className='bannerBox'>
            <div className='bannerBox__filter'></div>
            <img src={bannerImg} alt='paysage'className='bannerBox__img'></img>
            <p className='bannerBox__text'>{bannerText}</p>
        </div>
    )
}

export default Banner