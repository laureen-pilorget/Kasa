import React from 'react';
import './banner.scss';

const Banner = ({imgBanner,textBanner}) => {
    return(
        <div className='bannerBox'>
            <div className='filter'></div>
                <img src={imgBanner} alt='paysage'className='imgBanner'></img>
                <p className='textBanner'>{textBanner}</p>
        </div>
    )
}

export default Banner