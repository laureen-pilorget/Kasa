import React from 'react';
import Carousel from './../../components/carousel/carousel';
import AccomodationContainer from './../../components/accomodation-container/accomodation/accomodation';

const Accomodations = () => {
    return(
        <div>
            <p>Ici la page de logements</p>
            <Carousel />
            <AccomodationContainer />
        </div>
    )
}
export default Accomodations