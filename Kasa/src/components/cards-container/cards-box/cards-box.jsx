import React from 'react';
import Card from './../card/card';
import './cards-box.scss';
import DataBase from './../../../db.json';
import { NavLink } from 'react-router-dom';


const CardsBox = () => {
    return(
        <div className='sectionCards'>
            {/* On parcourt le fichier JSON pour retourner l'ID correspondant */}
            {DataBase.map((data) =>
                <NavLink key={data.id} to={`/Accomodations/${data.id}`}>
                    {/* Pour le bon ID, on retourne l'image et le titre qui lui sont assignés */}
                    <Card cardImg={data.cover} cardTitle={data.title}/>
                </NavLink>
                )}
        </div>
    )
}

export default CardsBox


