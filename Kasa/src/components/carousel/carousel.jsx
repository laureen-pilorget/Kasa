import React from 'react';
import './carousel.scss';
import Img from './../../assets/the-everygirl-june-tech-23-desktop-ted-1.jpg';
import VectorLeft from './../../assets/vector_left.png';
import VectorRight from './../../assets/vector_right.png';

const Carousel = () => {
    return(
        <div className='carousel'>
            <div className='carousel__vector'>
                <img src={VectorLeft} alt='flèche gauche' className='vector'></img>
                <img src={VectorRight} alt='flèche droite' className='vector'></img>
            </div>
            <img src={Img} alt='accomodation' className='carousel__img'></img>
        </div>
        
    )
}

export default Carousel