import React, { useState } from 'react';
import './carousel.scss';
import VectorLeft from './../../assets/vector_left.png';
import VectorRight from './../../assets/vector_right.png';



const Carousel = ({img}) => {
    // Utilisation du hook useState pour rendre visible ou non les images
    const [imgIndex, setImgIndex] = useState(0);
    // const handleSelect = (selectedIndex) => {
    //     setImgIndex(selectedIndex);
    return(
        <div className='carousel' //activeIndex={imgIndex} onSelect = {handleSelect}//
        >
            <div className='carousel__vector'>
                <img src={VectorLeft} alt='flèche gauche' className='vector'></img>
                <img src={VectorRight} alt='flèche droite' className='vector'></img>
            </div>
            {/* On retourne le tableau d'images  */}
            <img src={img[imgIndex]} alt='accomodation' className='carousel__img'></img>
        </div>
    )
}

export default Carousel




// let index = 0,
//         next = null;

//       $(imagesCollection).each(function(i) {
//         if ($(activeImage).attr("src") === $(this).attr("src")) {
//           index = i ;
//         }
//       });
//       next =
//         imagesCollection[index - 1] ||
//         imagesCollection[imagesCollection.length - 1];
//       $(".lightboxImage").attr("src", $(next).attr("src"));
//     },



// function ControlledCarousel() {
//     const [index, setIndex] = useState(0);
  
//     const handleSelect = (selectedIndex) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//         <Carousel.Item>
//           <ExampleCarouselImage text="First slide" />
//           <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <ExampleCarouselImage text="Second slide" />
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <ExampleCarouselImage text="Third slide" />
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     );
//   }