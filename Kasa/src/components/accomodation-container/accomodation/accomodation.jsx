import React from 'react';
import Host from './../host/host';
import Rate from './../rate/rate';
import Tags from './../tags/tags';
import Writings from './../writings/writings';
import './accomodation.scss';
import HostImgProfil from './../../../assets/the-everygirl-june-tech-23-desktop-ted-1.jpg';


const title='tata';
const text='toto';
const tags='lorem';
const name='titi';

const Accomodation = () => {
    return(
        <div className='accomodationBox'>
            <div className='writingsTags'>
                <Writings writingsTitle={title} writingsText={text}/>
                <Tags tags={tags}/>
            </div>
            <div className='hostRate'>
                <Host hostName={name} hostImg={HostImgProfil}/>
                <Rate />
            </div>
        </div>
    )
}
export default Accomodation