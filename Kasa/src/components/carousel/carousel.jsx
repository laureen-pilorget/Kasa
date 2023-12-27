import React, { useState } from 'react';
import './carousel.scss';
import VectorLeft from './../../assets/vector_left.png';
import VectorRight from './../../assets/vector_right.png';



const Carousel = ({img}) => {
    // Utilisation du hook useState pour rendre visible ou non les images
    const [imgIndex, setImgIndex] = useState(0);
    return(
        <div className='carousel'>
            <div className='carousel__vector'>
                <img src={VectorLeft} alt='flèche gauche' className='vector'></img>
                <img src={VectorRight} alt='flèche droite' className='vector'></img>
            </div>
            {/* On retourne le tableau d'images  */}
            <img src={img [imgIndex]} alt='accomodation' className='carousel__img'></img>
        </div>
    )
}

export default Carousel