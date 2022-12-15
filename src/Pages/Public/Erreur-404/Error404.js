// importation des modules 
import React from 'react';
import { NavLink } from 'react-router-dom';

//importation du css
import "@/Pages/Public/Erreur-404/Error404.css";

const Erreur404 = () => {

    return (
        <section className="Error_Container">
            <h1 className="Error_Title">404</h1>
            <span className="Error_Desc">Oups! La page que vous demandez n'existe pas.</span>
            <NavLink to="/" className="Error_Link">Retourner sur la page d’accueil</NavLink>
        </section>
    );
}

export default Erreur404;