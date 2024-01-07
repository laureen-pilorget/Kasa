import React, { useState } from 'react';
import './carousel.scss';
import VectorLeft from './../../assets/vector_left.png';
import VectorRight from './../../assets/vector_right.png';


const Carousel = ({img}) => {
    // Utilisation du hook useState pour rendre visible ou non les images
    const [imgIndex, setImgIndex] = useState(0);
    const handlePrev = () => {
        setImgIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
    };
    const handleNext = () => {
        setImgIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
    };

    return(
        <div className='carousel' activeIndex={imgIndex}>
            {/* On demande à n'afficher le code suivant QUE s'il y a plus d'une image */}
            {img.length > 1 && (
                <div className='carousel__vector'>
                    <img src={VectorLeft} alt='flèche gauche' onClick={handlePrev} className='vector'></img>
                    <img src={VectorRight} alt='flèche droite' onClick={handleNext}className='vector'></img>
                </div>
            )}
            {/* On retourne le tableau d'images  */}
            <img src={img[imgIndex]} alt='accomodation' className='carousel__img'></img>
            {/* On demande à n'afficher le code suivant QUE s'il y a plus d'une image */}
            {img.length > 1 && (
                <p className='carousel__counter'>{imgIndex +1}/{img.length}</p>
            )}
        </div>
    )
}

export default Carousel