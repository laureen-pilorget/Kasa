import React from 'react';
import Banner from './../../components/banner/banner';
import CardsBox from './../../components/cards-container/cards-box/cards-box';

const Home = () => {
    return(
        <div>
            <p>Ici la page d'accueil</p>
            <Banner />
            <CardsBox />
        </div>
    )
}
export default Home