import React from 'react';
import Banner from './../../components/banner/banner';
import CardsBox from './../../components/cards-container/cards-box/cards-box';
import ImgBanner from './../../assets/img-banniere.png';
import './home.scss';

const Home = () => {
    return(
        <main className='mainHome'>
            <section className='home__banner'>
                <Banner imgBanner={ImgBanner} textBanner='Chez vous, partout et ailleurs'/>
            </section>
            <section className='home__cardsBox'>
                <CardsBox />
            </section>
        </main>
    )
}
export default Home