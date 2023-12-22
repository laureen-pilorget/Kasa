import React from 'react';
import Carousel from './../../components/carousel/carousel';
import AccomodationContainer from './../../components/accomodation-container/accomodation/accomodation';
import Collaps from '../../components/collaps/collaps';

const Accomodations = () => {
    return(
        <main>
            <section className='accomodations__carousel'>
                <Carousel />
            </section>
            <section className='accomodations__accomodationContainer'>
                <AccomodationContainer />
            </section>
            <section className='accomodations__collaps'>
                <Collaps />
            </section>
        </main>
    )
}
export default Accomodations