import React from 'react';
import Host from './../host/host';
import Rate from './../rate/rate';
import Tags from './../tags/tags';
import Title from './../title/title';
import './accomodation.scss';

const Accomodation = () => {
    return(
        <div>
            <p>Ici la page de logements</p>
            <Host />
            <Rate />
            <Tags />
            <Title />
        </div>
    )
}
export default Accomodation