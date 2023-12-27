import React from 'react';
import Banner from './../../components/banner/banner';
import Collaps from './../../components/collaps/collaps';
import MountainImg from './../../assets/mountain-img.png';
import './about.scss';


// Création du tableau pour le collaps
const collapsArray = [
    {
        "title" : "Fiabilité",
        "text" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    },
    {
        "title" : "Respect",
        "text" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        "title" : "Service",
        "text" : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        "title" : "Sécurité",
        "text" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes"
    }
]

const About = () => {
    return(
        <main className='mainAbout'>
            <section className='about__banner'>
                <Banner bannerImg={MountainImg}/>
            </section>
            <section className='about__collaps'>
                {/* On parcourt le tableau créé précédemment */}
                {collapsArray.map((data,index) =>(
                    // On récupère le titre et le texte pour chaque collaps
                    <Collaps collapsTitle ={data.title} collapsText={data.text} key={index}/>
                ))}
            </section>
        </main>
    )
}
export default About