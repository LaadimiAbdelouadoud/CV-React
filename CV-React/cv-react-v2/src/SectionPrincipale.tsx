import React from 'react';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import Acceuil from './Components/Accueil/Acceuil';
import APropos from './Components/APropos/APropos';
import Parcours from './Components/Parcours/Parcours';
import Competences from './Components/Competences/Competences';
import Footer from './Components/Footer/Footer';

function SectionPrincipale(){

    return(
        <>
      <NavBar/>
      <Acceuil/>
      <APropos/>
      <Parcours/>
      <Competences/>
      <Footer/>
    </>
    )
}

export default SectionPrincipale
