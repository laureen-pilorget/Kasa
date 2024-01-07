import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from './../../components/carousel/carousel';
import Accomodation from './../../components/accomodation-container/accomodation/accomodation';
import Collapse from '../../components/collapse/collapse';
import './accomodations.scss';
import DataBase from './../../db.json';
import Error404 from './../error404/error404';


const Accomodations = () => {
    // Utilisation du hook useParams pour aller chercher le bon ID 
    const {id} = useParams()
    const data = DataBase.find((data) => data.id === id)
    // Si l'ID n'est pas le bon
    if (!data) {
        // Alors afficher la page d'erreur
        return <Error404/>
    }
    // Création d'un tableau pour les collaps
    const accomodationsArray = [
        {
        "title" : "Description",
        "description" : data.description
        },
        {
        "title" : "Équipements",
        "description" : data.equipments
        }
    ]
    return(
        <main className='mainAccomodations'>
            <section className='accomodations__carousel'>
                <Carousel img={data.pictures}/>
            </section>
            <section className='accomodations__accomodationContainer'>
                <Accomodation data={data}/>
            </section>
            <section className='mainAccomodations__collapse'>
                {/* On parcourt le tableau créé précédemment */}
                {accomodationsArray.map((data,index) =>(
                    // Et on en récupère le titre et la description pour l'afficher dans les collaps
                    <Collapse collapseTitle ={data.title} collapseText ={data.description} key={index}/>
                ))}
            </section>
        </main>
    )
}

export default Accomodations