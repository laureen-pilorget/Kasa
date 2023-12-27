import React from 'react';
import Carousel from './../../components/carousel/carousel';
import AccomodationContainer from './../../components/accomodation-container/accomodation/accomodation';
import Collaps from '../../components/collaps/collaps';
import './accomodations.scss';


const title ='blablabla';
const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, ea facilis facere eos dignissimos vitae quibusdam tempore temporibus minus cumque corporis reiciendis dolor non corrupti suscipit laborum ullam aspernatur.';


const Accomodations = () => {
    return(
        <main className='mainAccomodations'>
            <section className='accomodations__carousel'>
                <Carousel />
            </section>
            <section className='accomodations__accomodationContainer'>
                <AccomodationContainer />
            </section>
            <section className='accomodations__collaps'>
                <Collaps collapsTitle={title} collapsText={text}/>
                <Collaps collapsTitle={title} collapsText={text}/>
            </section>
        </main>
    )
}
export default Accomodations