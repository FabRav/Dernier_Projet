// importation des dépendances et modules

import React from 'react';
import { NavLink } from 'react-router-dom';

import LogementService from "@/_Services/Logement.service.js";

// importation du css
import "@/Pages/Public/Accueil/Home.css";

//importation des compostants et image
import Banner from "@/Components/Banner/Banner";
import Card from "@/Components/Card/Card";
import BannerPicture from "@/Assets/Images/Pages/Home/BannerHome.png";


const Home = () => {

    return (
        <section className="Home">
            <Banner picture={BannerPicture} title="Chez vous, partout et ailleurs" />
            <ul className="Appart_Box">
                {
                    LogementService.RetrieveAllLogement().map((logement) =>
                        <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                            <Card key={logement.id} id={logement.id} picture={logement.cover} title={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>
    );
}

export default Home;