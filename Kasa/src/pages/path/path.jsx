import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './../home/home';
import About from './../about/about';
import Error404 from './../error404/error404';
import Accomodations from './../accomodations/accomodations';
import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';


const Path = () => (
    <Router>
        <Header/>
        <Routes>
            <Route path= "/" element={<Home/>} />
            <Route path= "/About" element={<About/>}/>
            <Route path= "*" element={<Error404/>}/>
            <Route path= "/Accomodations/:id" element={<Accomodations/>}/>
        </Routes>
        <Footer/>
    </Router>
)

export default Path