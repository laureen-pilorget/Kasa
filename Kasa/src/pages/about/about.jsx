import React from 'react';
import Banner from './../../components/banner/banner';
import Collaps from './../../components/collaps/collaps';
import MountainImg from './../../assets/mountain-img.png';
import './about.scss'

const About = () => {
    return(
        <main className='mainAbout'>
            <section className='about__banner'>
                <Banner imgBanner={MountainImg}/>
            </section>
            <section className='about__collaps'>
                <Collaps />
            </section>
        </main>
    )
}
export default About