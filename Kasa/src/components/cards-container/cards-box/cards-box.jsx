import React from 'react';
import Card from './../card/card';
import './cards-box.scss';
import img from './../../../assets/the-everygirl-june-tech-23-desktop-ted-1.jpg';

const title = 'ici le titre';
const CardsBox = () => {
    return(
        <div className='sectionCards'>
            <Card cardImg={img} cardTitle={title}/>
            <Card cardImg={img} cardTitle={title}/>
            <Card cardImg={img} cardTitle={title}/>
            <Card cardImg={img} cardTitle={title}/>
            <Card cardImg={img} cardTitle={title}/>
            <Card cardImg={img} cardTitle={title}/>
        </div>
    )
}
export default CardsBox