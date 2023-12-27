import React from 'react';
import Banner from './../../components/banner/banner';
import Collaps from './../../components/collaps/collaps';
import MountainImg from './../../assets/mountain-img.png';
import './about.scss';


const title ='blablabla';
const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, ea facilis facere eos dignissimos vitae quibusdam tempore temporibus minus cumque corporis reiciendis dolor non corrupti suscipit laborum ullam aspernatur.';

const About = () => {
    return(
        <main className='mainAbout'>
            <section className='about__banner'>
                <Banner bannerImg={MountainImg}/>
            </section>
            <section className='about__collaps'>
                <Collaps collapsTitle ={title} collapsText={text}/>
                <Collaps collapsTitle ={title} collapsText={text}/>
                <Collaps collapsTitle ={title} collapsText={text}/>
                <Collaps collapsTitle ={title} collapsText={text}/>
            </section>
        </main>
    )
}
export default About