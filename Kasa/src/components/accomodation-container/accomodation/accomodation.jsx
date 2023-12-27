import React from 'react';
import Host from './../host/host';
import Rate from './../rate/rate';
import Tags from './../tags/tags';
import Writings from './../writings/writings';
import './accomodation.scss';


const Accomodation = ({data}) => {
    return(
        <div className='accomodationBox'>
            <div className='writingsTags'>
                <Writings writingsTitle={data.title} writingsText={data.location}/>
                <Tags tagList={data.tags}/>
            </div>
            <div className='hostRate'>
                <Host hostName={data.host.name} hostImg={data.host.picture}/>
                <Rate numberOfStars={data.rating}/>
            </div>
        </div>
    )
}
export default Accomodation
